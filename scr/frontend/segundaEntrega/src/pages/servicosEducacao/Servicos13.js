import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos13() {
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
                    src="/img/educacao/sebraeMiniatura.png"
                    alt="Logo Casa1"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Sebrae</h1>
                <p style={styles.description}>
                  O Sebrae está na força de cada empreendedor que acorda todos
                  os dias para cuidar do seu negócio.
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
            O Sebrae está ao lado de cada empreendedor que arregaça as mangas e
            faz acontecer, porque sabe que para construir um país mais forte é
            preciso trabalhar junto.
            <br></br> <br></br>O Serviço de Apoio às Micro e Pequenas Empresas
            (Sebrae) existe para incentivar o empreendedorismo e auxiliar quem
            está nessa jornada oferecendo programas de capacitação, estímulo à
            competitividade, sustentabilidade, além de trabalhar para
            proporcionar um ambiente que fortaleça os pequenos negócios.
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
                href="https://sebrae.com.br/sites/PortalSebrae/cursosonline"
                target="_blank"
                rel="noreferrer"
              >
                https://sebrae.com.br/sites/PortalSebrae/cursosonline
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/sebrae/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/sebrae/
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
              100% online e opção presencial:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://maps.app.goo.gl/wxJZbBx9XvyERQfZ8"
                target="_blank"
                rel="noreferrer"
              >
                R. Maj. Carlos del Prete, 651 - Centro, São Caetano do Sul - Sp,
                9560-000, São Caetano do Sul, SP, 09560-000 
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
                href="tel:11422776661"
                target="_blank"
                rel="noreferrer"
              >
                (11) 4227-7666
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
                href="https://sebrae.com.br/sites/PortalSebrae/cursosonline/gestao-financeira,7370b8a6a28bb610VgnVCM1000004c00210aRCRD"
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
                    src="/img/educacao/gestaoFinanceira.png"
                    alt="Curso de Gestao financeira"
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
                    Curso de Gestao financeira
                  </div>
                </div>
              </a>
              <a
                href="https://sebrae.com.br/sites/PortalSebrae/cursosonline/marketing-digital-para-o-empreendedor,f870b8a6a28bb610VgnVCM1000004c00210aRCRD"
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
                    src="/img/educacao/marketing.png"
                    alt="Curso de Marketing"
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
                    Curso de Marketing
                  </div>
                </div>
              </a>
              <a
                href="https://sebrae.com.br/sites/PortalSebrae/cursosonline/gestao-de-pessoas,eda0b8a6a28bb610VgnVCM1000004c00210aRCRD"
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
                    src="/img/educacao/gestaoPessoas.png"
                    alt="Curso de Gestao Pessoas"
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
                    Curso de Gestao Pessoas
                  </div>
                </div>
              </a>
              <a
                href="https://sebrae.com.br/sites/PortalSebrae/cursosonline/aprender-a-empreender,b070b8a6a28bb610VgnVCM1000004c00210aRCRD"
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
                    src="/img/educacao/empreender.png"
                    alt="Curso de empreender"
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
                    Curso de empreender
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
    backgroundImage: "url(/img/educacao/backgroudSebrae.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/educacao/sebraeMiniatura.png)",
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

export default Servicos13;