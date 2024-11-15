import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos16() {
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
                  <img alt="Sigbol" style={styles.logoImage} />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Montagem de arranjos florais</h1>
                <p style={styles.description}>
                  O ateliê paulistano Se Flor pra Ser realiza workshops
                  esporádicos onde você aprende a montar seu próprio arranjo de
                  flores! A experiência é acompanhada de bebidas, comidinhas e
                  brindes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2
            style={{
              marginTop: "70px",
              marginBottom: "20px",
              paddingLeft: "70px",
            }}
          >
            <span style={{ color: "#FFF" }}>Descrição da</span>{" "}
            <span style={{ color: "#9B0202" }}>instituição:</span>
          </h2>
          <p
            style={{ color: "#FFF", paddingLeft: "70px", paddingRight: "70px" }}
          >
            O Se Flor pra Ser é um ateliê paulistano focado em workshops de montagem de arranjos florais. Essa experiência é pensada para que os participantes aprendam técnicas de design floral de maneira prática e divertida, além de incluir um ambiente acolhedor e descontraído com bebidas, petiscos e brindes. Esses workshops costumam atrair aqueles que querem explorar a criatividade e aprender algo novo enquanto socializam.
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
                href="https://www.seflorpraser.com.br"
                target="_blank"
                rel="noreferrer"
              >
                https://www.seflorpraser.com.br
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href=" https://www.instagram.com/seflorpraser/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/seflorpraser/
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
              <a style={{ color: "#FFF" }} target="_blank" rel="noreferrer">
                Somente após pagamento do Workshop
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
                href="tel:11947099980"
                target="_blank"
                rel="noreferrer"
              >
                (11) 94709-9980
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
            <div
              style={{
                display: "flex",
                gap: "50px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <a
                style={{
                  position: "relative",
                  width: "35%",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/img/educacao/arranjos1.png"
                    alt="Curso de Ajustes e reformas"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />

                </div>
              </a>
              <a
                style={{
                  position: "relative",
                  width: "35%",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/img/educacao/arranjos2.png"
                    alt="Curso de Corte e costura - Malha"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />

                </div>
              </a>
              <a
                style={{
                  position: "relative",
                  width: "35%",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/img/educacao/arranjos3.png"
                    alt="Curso de Manuseio de maquina de costura"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />

                </div>
              </a>
              <a
                style={{
                  position: "relative",
                  width: "35%",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="/img/educacao/arranjos4.png"
                    alt="Curso de modelagem industrial"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />

                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url(/img/educacao/florais.png)", // Certifique-se de que a extensão do arquivo está correta
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh", // Ajuste conforme necessário
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Escurece a imagem de fundo
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
    backgroundImage: "url(/img/educacao/logoArranjos.png)",
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

export default Servicos16;
