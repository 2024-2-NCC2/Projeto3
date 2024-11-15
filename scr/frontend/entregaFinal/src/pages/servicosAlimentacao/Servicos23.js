import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Servicos23() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div>
      <Header />
      <main style={{ padding: "0", maxWidth: "100%", margin: "0" }}>
        <div style={styles.background}>
          <div style={styles.overlay}>
            <div style={styles.container}>
              <div style={styles.logoContainer}>
                <div style={styles.logoCircle}>
                  <img
                    src="/img/acolhimento/casa1/casa1.jpeg"
                    alt="Logo Casa1"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Sesc Mesa Brasil</h1>
                <p style={styles.description}>
                  O Sesc Mesa Brasil é um programa que combate a fome e o desperdício de alimentos, redistribuindo doações de empresas para instituições sociais que atendem pessoas em vulnerabilidade. Além de doar alimentos, o projeto promove educação sobre alimentação saudável e o aproveitamento integral dos alimentos, buscando aliviar a fome e conscientizar a sociedade sobre a redução do desperdício.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 style={{ marginBottom: "20px", paddingLeft: "70px" }}>
            <span style={{ color: "#FFF" }}>Descrição da</span>{" "}
            <span style={{ color: "#9B0202" }}>instituição:</span>
          </h2>
          <p
            style={{ color: "#FFF", paddingLeft: "70px", paddingRight: "70px" }}
          >
            O Sesc Mesa Brasil é um programa de segurança alimentar e nutricional que visa combater a fome e o desperdício de alimentos no Brasil. Criado pelo Serviço Social do Comércio (Sesc), o projeto funciona como uma rede de solidariedade que coleta alimentos excedentes ou fora dos padrões comerciais de grandes empresas, supermercados e produtores, mas que ainda estão em perfeitas condições para o consumo. Esses alimentos são redistribuídos para instituições sociais que atendem pessoas em situação de vulnerabilidade, como creches, abrigos e asilos, garantindo que o que seria descartado tenha um destino solidário.
            <br></br>
            <br></br>
            Além da distribuição de alimentos, o Mesa Brasil também oferece atividades educativas, como oficinas e palestras, sobre alimentação saudável, segurança alimentar e aproveitamento integral dos alimentos. O projeto busca não apenas aliviar a fome, mas também contribuir para a conscientização sobre a importância de uma alimentação balanceada e a redução do desperdício. Com uma rede de parcerias robusta, o programa atende milhares de pessoas em todo o país, sendo um dos maiores exemplos de ação solidária e sustentável no combate à fome no Brasil.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            paddingLeft: "70px",
          }}
        >
          <div style={{ flexBasis: "48%" }}>
            <h2 style={{ marginBottom: "10px" }}>
              <span style={{ color: "#FFF" }}>Informações</span>{" "}
              <span style={{ color: "#9B0202" }}>sobre:</span>
            </h2>
            <p
              style={{
                color: "#9B0202",
                fontSize: "0.8rem",
                fontWeight: "bolder",
              }}
            >
              Links:
            </p>
            <p style={{ color: "#FFF" }}>
              Site:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.sesc.com.br/atuacoes/assistencia/sesc-mesa-brasil/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.sesc.com.br/atuacoes/assistencia/sesc-mesa-brasil/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/sescmesabrasilsp/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/sescmesabrasilsp/
              </a>
            </p>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            paddingLeft: "70px",
          }}
        >
          <div style={{ flexBasis: "48%" }}>
            <h2 style={{ marginBottom: "10px" }}>
              <span style={{ color: "#FFF" }}>Endereço</span>{" "}
              <span style={{ color: "#9B0202" }}></span>
            </h2>
            <p style={{ color: "#FFF" }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              Endereço:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.google.com.br/maps/place/S%C3%A3o+Paulo,+SP/@-23.6820635,-46.9249594,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                São Paulo, SP
              </a>
            </p>

          </div>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2
            style={{
              marginBottom: "20px",
              paddingLeft: "70px",
              paddingRight: "70px",
            }}
          >
            <span style={{ color: "#FFF" }}>Fotos do</span>{" "}
            <span style={{ color: "#9B0202" }}>local:</span>
          </h2>
          <div
            style={{
              display: "flex",
              gap: "50px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              src="/img/alimentacao/sescMesa/img1.jpg"
              alt="Caminhão"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/sescMesa/img2.jpg"
              alt="Caminhão"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/sescMesa/img3.jpg"
              alt="Entrega"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/sescMesa/img4.jpg"
              alt="Entrega"
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url(/img/alimentacao/sescMesa/sescBack.jpg)", // Certifique-se de que a extensão do arquivo está correta
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh", // Ajuste conforme necessário
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Escurece a imagem de fundo
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column", // Alinha os itens em coluna
    alignItems: "center", // Alinha os itens à esquerda
    padding: "0 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoContainer: {
    marginBottom: "20px", // Espaçamento entre o logo e o título
  },
  logoCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%", // Torna o contêiner circular
    overflow: "hidden", // Garante que a imagem não ultrapasse os limites do círculo
    backgroundImage: "url(/img/alimentacao/sescMesa/sescLog.png)",
    backgroundSize: "cover", // Garante que a imagem preencha todo o contêiner
    backgroundPosition: "center", // Centraliza a imagem
  },
  logoImage: {
    display: "none", // Esconde a tag img, já que estamos usando backgroundImage
  },
  textContainer: {
    marginBottom: "20px", // Espaçamento entre o título e a descrição
    textAlign: "center",
  },
  title: {
    color: "#9B0202", // Cor do texto
    fontSize: "48px", // Tamanho da fonte
    marginBottom: "10px", // Espaçamento entre o título e a descrição
  },
  description: {
    color: "#fff", // Cor do texto
    fontSize: "20px", // Tamanho da fonte
    textAlign: "center", // Centraliza o texto
  },
};

export default Servicos23;
