# 📁 Pasta para arquivos relacionados ao Banco de Dados

## 📋 Conteúdos

[1] Justificativa para o uso do Banco de Dados;

[2] Mini Mundo;

[3] Diagrama Entidade-Relacionamento;

[4] Modelagem das tabelas e seus relacionamentos.

[5] Descrição das tabelas SQL:

### Descrição das Tabelas do Banco de Dados

#### Tabela `usuariosAdmin`
Tabela que armazena informações dos usuários administradores.

| Campo   | Tipo         | Descrição                        |
|---------|--------------|----------------------------------|
| idAdmin | INT          | Chave primária, auto incremento  |
| usuario | VARCHAR(255) | Nome de usuário                  |
| senha   | VARCHAR(255) | Senha do usuário                 |
| nome    | VARCHAR(255) | Nome completo do usuário         |
| foto    | VARCHAR(255) | URL da foto do usuário           |

#### Tabela `PrestadorServico`
Tabela que armazena informações dos prestadores de serviço (ONGs).

| Campo         | Tipo         | Descrição                        |
|---------------|--------------|----------------------------------|
| idUsuario     | INT          | Chave primária, auto incremento  |
| nomeOng       | VARCHAR(255) | Nome da ONG                      |
| telefoneOng   | VARCHAR(20)  | Telefone da ONG                  |
| emailOng      | VARCHAR(255) | Email da ONG                     |
| linkSite      | VARCHAR(255) | Link do site da ONG              |
| linkRedesSociais | TEXT      | Links das redes sociais da ONG   |
| enderecoOng   | VARCHAR(255) | Endereço da ONG                  |
| logoOng       | VARCHAR(255) | URL do logo da ONG               |
| fotosCarrosel | TEXT         | URLs das fotos do carrossel      |
| dataCadastro  | TIMESTAMP    | Data de cadastro, padrão para a data atual |

#### Tabela `Tipo_Servico`
Tabela que armazena os tipos de serviço oferecidos.

| Campo        | Tipo         | Descrição                        |
|--------------|--------------|----------------------------------|
| idTipoServico| INT          | Chave primária, auto incremento  |
| causa        | VARCHAR(255) | Causa do serviço                 |

#### Tabela `Servico`
Tabela que armazena os serviços oferecidos, com chaves estrangeiras para `PrestadorServico` e `Tipo_Servico`.

| Campo        | Tipo         | Descrição                        |
|--------------|--------------|----------------------------------|
| idServico    | INT          | Chave primária, auto incremento  |
| descricao    | TEXT         | Descrição do serviço             |
| modeloOng    | VARCHAR(255) | Modelo da ONG                    |
| idUsuario    | INT          | Chave estrangeira para `PrestadorServico` |
| idTipoServico| INT          | Chave estrangeira para `Tipo_Servico` |

As chaves estrangeiras possuem as seguintes restrições:
- `idUsuario` referencia `idUsuario` em `PrestadorServico` com `ON DELETE CASCADE`.
- `idTipoServico` referencia `idTipoServico` em `Tipo_Servico` com `ON DELETE SET NULL`.

[6] Comandos para criação
```sql
-- Criação do banco de dados

CREATE DATABASE cadastro;
USE cadastro;

-- Criação da tabela para usuários administradores

CREATE TABLE usuariosAdmin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Inserção de dados na tabela usuariosAdmin

INSERT INTO usuariosAdmin (usuario, senha) VALUES
    ("admin", "123"),
    ("admin2", "oii");

-- Criação da tabela de Prestador de Serviço (ONGs)
CREATE TABLE PrestadorServico (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeOng VARCHAR(255),
    telefoneOng VARCHAR(20),
    emailOng VARCHAR(255),
    linkSite VARCHAR(255),
    linkRedesSociais TEXT,
    enderecoOng VARCHAR(255),
    logoOng VARCHAR(255),
    fotosCarrosel TEXT,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

- Criação da tabela de Tipos de Serviço

CREATE TABLE Tipo_Servico (
    idTipoServico INT PRIMARY KEY AUTO_INCREMENT,
    causa VARCHAR(255) NOT NULL
);

-- Criação da tabela de Serviços, com chaves estrangeiras para PrestadorServico e Tipo_Servico

CREATE TABLE Servico (
    idServico INT PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT,
    modeloOng VARCHAR(255),
    idUsuario INT,
    idTipoServico INT,
    FOREIGN KEY (idUsuario) REFERENCES PrestadorServico(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idTipoServico) REFERENCES Tipo_Servico(idTipoServico) ON DELETE SET NULL
);
```





