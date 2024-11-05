import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos22() {
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
                <h1 style={styles.title}>Tonkiri</h1>
                <p style={styles.description}>
                  O Projeto Tonkiri é uma ação social voltada para o combate à fome nas periferias, distribuindo cestas básicas e refeições para famílias vulneráveis. A iniciativa mobiliza voluntários e arrecada doações para amenizar a insegurança alimentar, enquanto busca promover a dignidade e fortalecer laços comunitários.
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
            O Projeto Tonkiri é uma iniciativa social que atua no combate à fome em comunidades periféricas. Com o objetivo de garantir alimentação básica para famílias em situação de vulnerabilidade, o projeto organiza a distribuição de cestas básicas e refeições preparadas, além de promover campanhas de arrecadação de alimentos e doações. Sua atuação é pautada pela solidariedade, buscando mobilizar voluntários e parceiros para ampliar o impacto e atender um número crescente de pessoas que enfrentam a insegurança alimentar.
            <br></br>
            <br></br>
            Além de doar alimentos, o Projeto Tonkiri também desenvolve ações para fortalecer laços comunitários e promover a dignidade das pessoas atendidas, oferecendo apoio humanitário e construindo redes de solidariedade. O projeto acredita que, além de aliviar a fome, é necessário gerar conscientização sobre os direitos sociais e fomentar a participação da sociedade na luta contra a pobreza. Assim, o Tonkiri desempenha um papel importante no enfrentamento da fome e da exclusão social nas periferias.
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
                href="https://tonkiri.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://tonkiri.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/tonkiri_voa/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/tonkiri_voa/
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
              <span style={{ color: "#FFF" }}>Endereço e</span>{" "}
              <span style={{ color: "#9B0202" }}>contato:</span>
            </h2>
            <p style={{ color: "#FFF" }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              Endereço:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.google.com.br/maps/place/Av.+Dracena,+579+-+Jaguar%C3%A9,+S%C3%A3o+Paulo+-+SP,+05329-000/@-23.5421942,-46.750161,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef8acd3f36951:0xc02334cc68962aef!8m2!3d-23.5421942!4d-46.7475861!16s%2Fg%2F11bw4436dp?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Avenida Dracena, 579 - Jaguaré 05329-000 São Paulo - SP
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ marginRight: "8px" }}
              />
              Contato:{" "}
              <a
                style={{ color: "#FFF" }}
                href="tel:11973911233"
                target="_blank"
                rel="noreferrer"
              >
                (11) 97391-1233
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
              src="/img/alimentacao/Tonkiri/img1.jpg"
              alt="Cozinheiras"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/Tonkiri/img2.jpg"
              alt="Cozinha"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/Tonkiri/img3.jpg"
              alt="Pão"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/Tonkiri/img4.jpg"
              alt="Pão"
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
    backgroundImage: "url(/img/alimentacao/Tonkiri/TonkBack.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/alimentacao/Tonkiri/LogoTok.png)",
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

export default Servicos22;
