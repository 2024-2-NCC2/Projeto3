import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos14() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  const navigate = useNavigate();

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
                    alt="Logo Casa1"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Fundação Bradesco</h1>
                <p style={styles.description}>
                  Um portal educacional que favorece a aprendizagem!
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
            Criada em 2001, a Escola Virtual é um portal de e-learning dedicado a oferecer cursos gratuitos e 100% on-line em diferentes áreas de interesse, como Desenvolvimento Pessoal e Profissional, Metodologias de Aprendizagem, Negócios e Inovação, Produtividade, Programação e Tecnologia da Informação.
            <br></br> <br></br>A arquitetura digital da Escola Virtual favorece a autogestão do estudo, por isso, disponibiliza um ambiente virtual completo e que respeita o ritmo e a capacidade de aprendizagem de cada pessoa.
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
                href="https://ev.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://ev.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/fundacao.bradesco/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/fundacao.bradesco/
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
              <a
                style={{ color: "#FFF" }}
                target="_blank"
                rel="noreferrer"
              >
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
                href="tel:08007279933"
                target="_blank"
                rel="noreferrer"
              >
                0800 727 9933
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
                href="https://www.ev.org.br/cursos/excel-na-pratica"
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
                    src="/img/educacao/excelNaPratica.png"
                    alt="Excel na prática"
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
                    Excel na prática
                  </div>
                </div>
              </a>
              <a
                href="https://www.ev.org.br/cursos/atendimento-ao-publico"
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
                    src="/img/educacao/atendimentoAoPublico.png"
                    alt="Curso de Atendimento ao publico"
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
                    Curso de Atendimento ao Público
                  </div>
                </div>
              </a>
              <a
                href="https://www.ev.org.br/cursos/Como-Conseguir-um-Novo-Emprego"
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
                    src="/img/educacao/emprego.png"
                    alt="Curso de Conseguir Emprego"
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
                    Curso de como conseguir emprego
                  </div>
                </div>
              </a>
              <a
                href="https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript"
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
                    src="/img/educacao/siteJavascript.png"
                    alt="Curso de como criar um site"
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
                    Curso de criar site com JavaScript, HTML e CSS
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
    backgroundImage: "url(/img/educacao/fundacaoBradescoHeader.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/educacao/bradescoLogo.png)",
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

export default Servicos14;