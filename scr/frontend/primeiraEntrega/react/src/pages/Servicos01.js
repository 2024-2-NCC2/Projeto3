import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos01() {
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
                    src="/img/casa1/casa1.jpeg"
                    alt="Logo Casa1"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Casa 1</h1>
                <p style={styles.description}>
                  Um projeto de sociedade civil que tem como propósito a
                  acolhida de jovens entre 18 e 25 anos que foram expulsos de
                  casa pela família por suas orientações afetivas sexuais e
                  identidade de gênero.
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
            Lorem ipsum dolor sit amet consectetur. Euismod rutrum nisi ante
            nunc. Vitae odio ornare condimentum libero. Est sed laoreet sed at
            at lectus neque. Amet eu mauris fermentum eu nunc eleifend eu
            elementum natoque. Pretium nulla et pulvinar nisi fames arcu nulla.
            Dictumst maecenas pharetra et pellentesque. Urna urna nec dignissim
            habitant ipsum. Turpis mi vitae fames amet pulvinar. Donec amet
            ultrices egestas sit nam enim. Sed sed mattis nunc libero sit
            interdum. <br></br> Leo leo et quisque ut tellus. Eget egestas sed
            pharetra sem gravida semper nisi proin. Imperdiet quis vel aliquam
            quam vehicula feugiat arcu sit. Erat egestas nibh facilisi at
            venenatis neque ultrices tellus. Vel libero nisi pellentesque lacus
            in mattis non. Vulputate quisque neque urna habitasse justo pulvinar
            egestas auctor. Vel id sed lacus bibendum mauris sed vel.
            Suspendisse ultrices ipsum a proin augue arcu sodales fermentum.
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
                href="https://www.casaum.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.casaum.org/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/casa1/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/casa1/
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
                href="https://www.google.com/search?sca_esv=db38b91c37c5cf98&sxsrf=ADLYWIJg_RRJrJ5BLQ2sQaKnAf74rvbblg:1726444969151&q=CASA+1+-+Centro+de+Cultura+e+Acolhimento+LGBT&ludocid=2957159734955648964&lsig=AB86z5XQxjXJ4whGJapQGIZMc-OG&sa=X&ved=2ahUKEwid7fDYlMaIAxXGqpUCHWLdCwkQoAJ6BAgdEAc"
                target="_blank"
                rel="noreferrer"
              >
                Rua Adoniran Barbosa 151, São Paulo, SP, 01318-020
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
                href="tel:11982976671"
                target="_blank"
                rel="noreferrer"
              >
                (11) 98297-6671
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
              src="/img/casa1/img1.png"
              alt="Biblioteca"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/casa1/img2.png"
              alt="Palestra"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/casa1/img3.png"
              alt="Abraço"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/casa1/img4.png"
              alt="Aula de yoga"
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>
        </section>

        <section
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 , marginLeft: "150px" }}>
            <h2 style={{ color: "#9B0202", fontSize: "15px", fontWeight: "bolder", marginBottom: "20px"}}>
              VAMOS CONVERSAR
            </h2>
            <p style={{ fontSize: "40px",color: "#FFF", fontWeight: "bolder" }}>
              Dê suas opiniões, <br></br>
              sugestões, <br></br>
              tire dúvidas!
            </p>
          </div>

          <div>
            <button
              style={{
                padding: "20px 20px",
                marginRight: "350px",
                fontSize: "1.3rem",
                backgroundColor: "#000",
                border: "2px solid #fff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ENTRE EM CONTATO!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url(/img/casa1/casa1background.png)", // Certifique-se de que a extensão do arquivo está correta
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column", // Alinha os itens em coluna
    alignItems: "flex-start", // Alinha os itens à esquerda
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
    backgroundImage: "url(/img/casa1/casa1.jpeg)",
    backgroundSize: "cover", // Garante que a imagem preencha todo o contêiner
    backgroundPosition: "center", // Centraliza a imagem
  },
  logoImage: {
    display: "none", // Esconde a tag img, já que estamos usando backgroundImage
  },
  textContainer: {
    marginBottom: "20px", // Espaçamento entre o título e a descrição
  },
  title: {
    color: "#9B0202", // Cor do texto
    fontSize: "32px", // Tamanho da fonte
    marginBottom: "10px", // Espaçamento entre o título e a descrição
  },
  description: {
    color: "#fff", // Cor do texto
    fontSize: "16px", // Tamanho da fonte
  },
};

export default Servicos01;
