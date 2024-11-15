import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos12() {
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
                    src="/img/maisServicos/abrinq/abrinqlogo.jpg"
                    alt="Logo ABRINQ"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Fundação ABRINQ</h1>
                <p style={styles.description}>
                  Desde 1990, a fundação defende os direitos de crianças e adolescentes no Brasil, garantindo acesso a educação, saúde e proteção, e promovendo políticas públicas para a infância.
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
            A Fundação Abrinq é uma organização não governamental que trabalha desde 1990 pela defesa dos direitos das crianças e adolescentes no Brasil. Seu objetivo é garantir que todas as crianças tenham acesso a educação, saúde e proteção, além de combater o trabalho infantil. A Fundação desenvolve uma série de projetos e parcerias que beneficiam milhares de jovens em situação de vulnerabilidade, oferecendo oportunidades para que possam se desenvolver plenamente e ter uma infância digna.
            <br></br>
            <br></br>
            A Fundação Abrinq também atua como uma voz ativa na promoção e fiscalização de políticas públicas que protejam os direitos das crianças e adolescentes. Ela trabalha junto a governos e empresas para que legislações e práticas que favorecem o bem-estar infantil sejam implementadas e respeitadas. Além disso, a fundação incentiva práticas empresariais socialmente responsáveis, mobilizando a sociedade para garantir que os direitos das crianças sejam prioridade.
            <br></br>
            <br></br>
            Com uma atuação ampla e diversificada, a Fundação Abrinq se destaca como uma referência na luta pelos direitos das crianças e adolescentes no Brasil. Através de suas ações e parcerias, ela tem transformado a vida de milhares de jovens, assegurando que possam crescer em um ambiente saudável e com as condições necessárias para desenvolver todo o seu potencial.
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
                href="https://www.fadc.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.fadc.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/fundacaoabrinq/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/fundacaoabrinq/
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
                href="https://www.google.com/maps/place/Funda%C3%A7%C3%A3o+Abrinq/@-23.6030895,-46.6741962,15z/data=!4m2!3m1!1s0x0:0x6492ef0c475c2f76?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                Rua Araguari 835, São Paulo, SP, 04514-041
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
                href="tel:03001012345"
                target="_blank"
                rel="noreferrer"
              >
                0300 10 12345
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
              src="/img/maisServicos/abrinq/img1.jpg"
              alt="Apresentação"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/abrinq/img2.jpg"
              alt="Sorriso"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/abrinq/img3.jpg"
              alt="Equipe"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/abrinq/img4.jpg"
              alt="Associadas Abrinq"
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
    backgroundImage: "url(/img/maisServicos/abrinq/abrinqbanner.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/abrinq/abrinqlogo.jpg)",
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

export default Servicos12;
