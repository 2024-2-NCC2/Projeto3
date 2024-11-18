const express = require("express");
const session = require('express-session'); // Adicione esta linha
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Carregar variáveis de ambiente

const app = express();

// Configuração de CORS para permitir requisições do frontend em localhost
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

// app.options('*', cors({
//   origin: process.env.CORS_ORIGIN || 'https://abracesp.netlify.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   credentials: true,
// }));


// Configuração de sessão
// app.use(session({
//   secret: 'seuSegredoAqui', // Substitua por uma chave secreta segura
//   resave: false,
//   saveUninitialized: false,
//   cookie: { 
//       secure: true,       // Necessário para HTTPS em produção
//       sameSite: 'none'    // Necessário para que cookies funcionem entre domínios diferentes (Netlify e Azure)
//   }
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Verifique se o diretório 'public/uploads' existe, caso contrário, crie-o
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do multer para salvar arquivos no diretório 'public/uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  ssl: {
    rejectUnauthorized: true,
  }
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
    return;
  }
  console.log("Conectado ao banco de dados");
});

const secretKey = process.env.JWT_SECRET || "sua_secret_key";

// Endpoint de login
app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  db.query(
    "SELECT * FROM usuariosAdmin WHERE usuario = ?",
    [usuario],
    (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        const usuariosAdmin = results[0];
        if (senha === usuariosAdmin.senha) {
          const token = jwt.sign({ id: usuariosAdmin.idAdmin }, secretKey, {
            expiresIn: "1h",
          });
          res.json({ token });
        } else {
          res.status(401).json({ message: "Credenciais invalidas" });
        }
      } else {
        res.status(401).json({ message: "Credenciais invalidas" });
      }
    }
  );
});

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Acesso negado" });

  jwt.verify(token, secretKey, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token invalido" });
    req.usuario = usuario;
    next();
  });
};

// Proteja a rota /admin
app.get("/admin", authenticateToken, (req, res) => {
  const { id } = req.usuario;
  db.query(
    "SELECT * FROM usuariosAdmin WHERE idAdmin = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar dados do admin: ", err);
        return res.status(500).send("Erro ao buscar dados do admin");
      }
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send("Admin não encontrado");
      }
    }
  );
});

// Endpoint para obter todos os cadastros
app.get("/cadastros", (req, res) => {
  console.log("Endpoint /cadastros acessado");
  const query = `
    SELECT ps.idUsuario, ps.nomeOng, ps.telefoneOng, ps.emailOng, ps.linkSite, ps.linkRedesSociais, ps.logoOng, ps.fotosCarrosel, ps.enderecoOng, ps.dataCadastro, s.descricao, s.modeloOng, ts.causa
    FROM PrestadorServico ps
    JOIN Servico s ON ps.idUsuario = s.idServico
    JOIN Tipo_Servico ts ON s.idServico = ts.idTipoServico
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao buscar cadastros: ", err);
      return res.status(500).send("Erro ao buscar cadastros");
    }
    console.log("Cadastros encontrados:", results);
    res.json(results);
  });
});

// Endpoint para deletar um cadastro
app.delete("/cadastros/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;

  // Deletar registros nas tabelas relacionadas
  const deleteServicoQuery = `DELETE FROM Servico WHERE idUsuario = ?`;
  const deleteTipoServicoQuery = `DELETE FROM Tipo_Servico WHERE idTipoServico IN (SELECT idTipoServico FROM Servico WHERE idUsuario = ?)`;
  const deletePrestadorQuery = `DELETE FROM PrestadorServico WHERE idUsuario = ?`;

  db.query(deleteServicoQuery, [idUsuario], (err) => {
    if (err) {
      console.error("Erro ao deletar serviço: ", err);
      return res.status(500).send("Erro ao deletar serviço");
    }

    db.query(deleteTipoServicoQuery, [idUsuario], (err) => {
      if (err) {
        console.error("Erro ao deletar tipo de serviço: ", err);
        return res.status(500).send("Erro ao deletar tipo de serviço");
      }

      db.query(deletePrestadorQuery, [idUsuario], (err) => {
        if (err) {
          console.error("Erro ao deletar prestador: ", err);
          return res.status(500).send("Erro ao deletar prestador");
        }

        console.log("Cadastro deletado com sucesso");
        res.status(200).send("Cadastro deletado com sucesso");
      });
    });
  });
});

// Endpoint para atualizar um cadastro - UPDATE
app.put("/cadastros/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  const {
    nomeOng,
    telefoneOng,
    emailOng,
    linkSite,
    linkRedesSociais,
    enderecoOng,
    descricao,
    modeloOng,
    causa,
  } = req.body;

  const updatePrestadorQuery = `
    UPDATE PrestadorServico
    SET nomeOng = ?, telefoneOng = ?, emailOng = ?, linkSite = ?, linkRedesSociais = ?, enderecoOng = ?
    WHERE idUsuario = ?
  `;

  const updateServicoQuery = `
    UPDATE Servico
    SET descricao = ?, modeloOng = ?
    WHERE idUsuario = ?
  `;

  const updateTipoServicoQuery = `
    UPDATE Tipo_Servico
    SET causa = ?
    WHERE idTipoServico = (SELECT idTipoServico FROM Servico WHERE idUsuario = ?)
  `;

  db.query(
    updatePrestadorQuery,
    [
      nomeOng,
      telefoneOng,
      emailOng,
      linkSite,
      linkRedesSociais,
      enderecoOng,
      idUsuario,
    ],
    (err) => {
      if (err) {
        console.error("Erro ao atualizar prestador: ", err);
        return res.status(500).send("Erro ao atualizar prestador");
      }

      db.query(updateServicoQuery, [descricao, modeloOng, idUsuario], (err) => {
        if (err) {
          console.error("Erro ao atualizar serviço: ", err);
          return res.status(500).send("Erro ao atualizar serviço");
        }

        db.query(updateTipoServicoQuery, [causa, idUsuario], (err) => {
          if (err) {
            console.error("Erro ao atualizar tipo de serviço: ", err);
            return res.status(500).send("Erro ao atualizar tipo de serviço");
          }

          console.log("Cadastro atualizado com sucesso");
          res.status(200).send("Cadastro atualizado com sucesso");
        });
      });
    }
  );
});

// Endpoint para obter dados do admin logado
app.get("/admin", authenticateToken, (req, res) => {
  const { id } = req.usuario;
  db.query(
    "SELECT * FROM usuariosAdmin WHERE idAdmin = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar dados do admin: ", err);
        return res.status(500).send("Erro ao buscar dados do admin");
      }
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).send("Admin não encontrado");
      }
    }
  );
});


// Endpoint para obter todos os prestadores de serviço

// Cadastro de um novo prestador e serviço
app.post(
  "/cadastro",
  upload.fields([
    { name: "logoOng", maxCount: 1 },
    { name: "fotosCarrosel", maxCount: 5 },
  ]),
  (req, res) => {
    const {
      nomeOng,
      telefoneOng,
      emailOng,
      linkSite,
      linkRedesSociais,
      enderecoOng,
      descricao,
      modeloOng,
      causa,
    } = req.body;

    const logoOng = req.files["logoOng"]
      ? `public/uploads/${req.files["logoOng"][0].filename}`
      : null;
    const fotosCarrosel = req.files["fotosCarrosel"]
      ? req.files["fotosCarrosel"].map(
          (file) => `public/uploads/${file.filename}`
        )
      : [];

    console.log("Dados recebidos:", {
      nomeOng,
      telefoneOng,
      emailOng,
      linkSite,
      linkRedesSociais,
      enderecoOng,
      descricao,
      modeloOng,
      causa,
      logoOng,
      fotosCarrosel,
    });

    const queryPrestador = `INSERT INTO PrestadorServico (nomeOng, telefoneOng, emailOng, linkSite, linkRedesSociais, logoOng, fotosCarrosel, enderecoOng) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      queryPrestador,
      [
        nomeOng,
        telefoneOng,
        emailOng,
        linkSite,
        linkRedesSociais,
        logoOng,
        JSON.stringify(fotosCarrosel),
        enderecoOng,
      ],
      (err, resultPrestador) => {
        if (err) {
          console.error("Erro ao inserir prestador: ", err);
          return res.status(500).send("Erro ao cadastrar prestador");
        }

        const idUsuario = resultPrestador.insertId;
        console.log("Prestador inserido com ID:", idUsuario);

        const queryTipoServico = `INSERT INTO Tipo_Servico (causa) VALUES (?)`;

        db.query(queryTipoServico, [causa], (err, resultTipoServico) => {
          if (err) {
            console.error("Erro ao inserir tipo de serviço: ", err);
            return res.status(500).send("Erro ao cadastrar tipo de serviço");
          }

          const idTipoServico = resultTipoServico.insertId;
          console.log("Tipo de serviço inserido com ID:", idTipoServico);

          const queryServico = `INSERT INTO Servico (descricao, modeloOng, idUsuario, idTipoServico) VALUES (?, ?, ?, ?)`;

          db.query(
            queryServico,
            [descricao, modeloOng, idUsuario, idTipoServico],
            (err) => {
              if (err) {
                console.error("Erro ao inserir serviço: ", err);
                return res.status(500).send("Erro ao cadastrar serviço");
              }

              console.log("Serviço inserido com sucesso");
              res.status(200).send("Cadastro realizado com sucesso!");
            }
          );
        });
      }
    );
  }
);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});