import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos17() {
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
                  <img alt="Ateliê Beija flor da Alma." style={styles.logoImage} />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Ateliê Beija flor da Alma</h1>
                <p style={styles.description}>
                 Ateliê de Cerâmica em São Paulo.
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
            Se você sonha em criar lindas peças de cerâmica com suas próprias mãos, o Ateliê Beija-flor da alma é o lugar certo! Lá você encontra aulas de modelagem manual ou torno, espaço coworking para artistas e oficinas de cerâmica. As aulas recorrentes ocorrem uma vez por semana, com duração de 3 horas.
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
                href="https://www.instagram.com/beijaflordaalma/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/beijaflordaalma/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/beijaflordaalma/"
                target="_blank"
                rel="noreferrer"
              >
                 https://www.instagram.com/beijaflordaalma/
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
              <a style={{ color: "#FFF" }} href="https://www.google.com.br/maps/place/R.+Mirante,+171+-+Jardim+S%C3%A3o+Paulo,+S%C3%A3o+Paulo+-+SP,+02045-060/@-23.4965962,-46.6175182,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef622531de0db:0x5e053c1fcd97204c!8m2!3d-23.4966011!4d-46.6149433!16s%2Fg%2F11c4n3n1y8?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
              R. Mirante, 171 - Jardim São Paulo, São Paulo - SP, 02045-060 
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
                href="tel:11961970342"
                target="_blank"
                rel="noreferrer"
              >
                (11) 96197-0342
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
                <div style={styles.cardImageContainer}
                >
                  <img
                    src="/img/educacao/ceramica1.png"
                    alt="Curso de Ajustes e reformas"
                    style={styles.cardImage}
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
                <div style={styles.cardImageContainer}
                >
                  <img
                    src="/img/educacao/ceramica2.jpg"
                    alt="Curso de Corte e costura - Malha"
                    style={styles.cardImage}
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
                <div style={styles.cardImageContainer}
                >
                  <img
                    src="/img/educacao/ceramica3.png"
                    alt="Curso de Manuseio de maquina de costura"
                    style={styles.cardImage}
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
                <div style={styles.cardImageContainer}
                >
                  <img
                    src="/img/educacao/ceramica4.png"
                    alt="Curso de modelagem industrial"
                    style={styles.cardImage}
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
    backgroundImage: "url(/img/educacao/ceramica.png)", // Certifique-se de que a extensão do arquivo está correta
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh", // Ajuste conforme necessário
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Escurece a imagem de fundo
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
    backgroundImage: "url(/img/educacao/beijaflordaalma.png)",
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
  cardImageContainer: {
    position: "relative",
    width: "100%",
    textDecoration: "none",
    height: "100%", // Fixed height for uniformity
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensures the image covers the container without distortion
    borderRadius: "5px",
    transition: "transform 0.3s",
  },
};

export default Servicos17;