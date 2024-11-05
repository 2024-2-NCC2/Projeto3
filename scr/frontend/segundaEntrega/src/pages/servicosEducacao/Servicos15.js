import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos15() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/#contato"); // Navega para a página HOME e para o container 'servicos'
  };

  return (
    <div>
      <Header />
      <main style={{ padding: "0", maxWidth: "100%", margin: "0" }}>
        <div style={styles.background}>
          <div style={styles.overlay}>
            <div style={styles.container}>
              <div style={styles.logoContainer}>
                <div style={styles.logoCircle}>
                  <img alt="Dio" style={styles.logoImage} />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Digital Innovation One</h1>
                <p style={styles.description}>
                  Codifique seu futuro global agora!
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
            +1.750 cursos, bootcamps, projetos e formações nas carreiras de back-end, front-end, mobile, games, data, inteligência artificial & cloud para elevar o seu nível profissional e conquistar oportunidades nas empresas mais desejadas do mundo.
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
                href="https://www.dio.me"
                target="_blank"
                rel="noreferrer"
              >
                https://www.dio.me
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/dio_makethechange/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/dio_makethechange/
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
              100% online{" "}
              <a style={{ color: "#FFF" }} target="_blank" rel="noreferrer"></a>
            </p>
            <p style={{ color: "#FFF" }}>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                style={{ marginRight: "8px" }}
              />
              Contato:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://digitalinnovationone.atlassian.net/servicedesk/customer/portals"
                target="_blank"
                rel="noreferrer"
              >
                https://digitalinnovationone.atlassian.net/servicedesk/customer/portals
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
            <span style={{ color: "#FFF" }}>Alguns cursos</span>{" "}
            <span style={{ color: "#9B0202" }}>disponíveis:</span>
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
                href="https://web.dio.me/track/coding-the-future-claro-java-spring-boot"
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
                    src="/img/educacao/cursoJava.jpg"
                    alt="Curso de Java"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    Curso de Java
                  </div>
                </div>
              </a>
              <a
                href="https://web.dio.me/track/gft-start-logica-de-programacao"
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
                    src="/img/educacao/cursoLogica.png"
                    alt="Curso de Lógica de programação"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    Curso de Lógica de Programação
                  </div>
                </div>
              </a>
              <a
                href="https://web.dio.me/track/microsoft-copilot-ai"
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
                    src="/img/educacao/cursoCopilot.jpg"
                    alt="Curso de Copilot"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    Curso de Copilot
                  </div>
                </div>
              </a>
              <a
                href="https://web.dio.me/track/bootcamp-nexa-machine-learning-para-iniciantes-na-aws"
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
                    src="/img/educacao/cursoMachineLearning.jpeg"
                    alt="Curso de machine learning"
                    style={{ width: "100%", borderRadius: "5px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      textAlign: "center",
                      padding: "10px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    Curso de Machine Learning
                  </div>
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
    backgroundImage: "url(/img/educacao/bgdio.png)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/educacao/dio.png)",
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

export default Servicos15;
