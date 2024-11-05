import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos18() {
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
                  <img alt="Sigbol" style={styles.logoImage} />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Corte e costura</h1>
                <p style={styles.description}>
                  Método de ensino se transforma na única rede brasileira
                  especializada em costura, modelagem e moda.
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
            Há 50 anos no mercado, a Sigbol já formou mais de 500 mil alunos em
            mais de 100 especialidades. 
            <br></br><br></br>
            Uma ex-secretária disposta a colocar um
            antigo plano profissional em ação, uma jovem estudante decidida a
            abrir o próprio ateliê e uma professora de ensino fundamental
            seduzida pelas perspectivas oferecidas por uma nova profissão. A
            variedade de histórias dos alunos da Sigbol, única rede de franquia
            de cursos profissionalizantes na área de moda no Brasil, é tão
            grande quanto a diversidade de cursos oferecidos pela marca. São, no
            total, 100 opções oferecidas a estudantes de diferentes históricos
            profissionais, diversos níveis de conhecimento em moda e com
            distintos objetivos pessoais.
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
                href="https://sigbol.com.br/cursos-de-moda-sigbol/"
                target="_blank"
                rel="noreferrer"
              >
                https://sigbol.com.br/cursos-de-moda-sigbol/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href=" https://sigbol.com.br/cursos-de-moda-sigbol/"
                target="_blank"
                rel="noreferrer"
              >
                 https://sigbol.com.br/cursos-de-moda-sigbol/
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
              <a style={{ color: "#FFF" }} href="https://www.google.com.br/maps/place/R.+Oriente,+275+-+Barcelona,+S%C3%A3o+Caetano+do+Sul+-+SP,+09551-010/@-23.6235513,-46.55266,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5d2600fedb8f:0x4ac7f7303e75376d!8m2!3d-23.6235562!4d-46.5500851!16s%2Fg%2F11c4p7zyt6?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
              Rua Oriente 275, São Caetano do Sul, SP, 09551-010 
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
                href="tel:114223061"
                target="_blank"
                rel="noreferrer"
              >
                (11) 4227-3061
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
                href="https://sigbol.com.br/curso-de-ajustes-e-reformas/"
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
                    src="/img/educacao/ajusteReforma.png"
                    alt="Curso de Ajustes e reformas"
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
                    Curso de ajustes e reformas
                  </div>
                </div>
              </a>
              <a
                href="https://sigbol.com.br/curso-de-corte-e-costura-malha/"
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
                    src="/img/educacao/costuraMalha.png"
                    alt="Curso de Corte e costura - Malha"
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
                    Curso de Corte e costura - Malha
                  </div>
                </div>
              </a>
              <a
                href="https://sigbol.com.br/curso-de-manuseio-maquinas-de-costura/"
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
                    src="/img/educacao/maquinaCostura.png"
                    alt="Curso de Manuseio de maquina de costura"
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
                    Curso de Manuseio de maquina de costura
                  </div>
                </div>
              </a>
              <a
                href="https://sigbol.com.br/curso-de-modelagem-industrial/"
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
                    src="/img/educacao/modelagem.png"
                    alt="Curso de modelagem industrial"
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
                    Curso de modelagem industrial
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
    backgroundImage: "url(/img/educacao/bgsigbol.webp)",
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
    backgroundImage: "url(/img/educacao/sigbol.png)",
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

export default Servicos18;
