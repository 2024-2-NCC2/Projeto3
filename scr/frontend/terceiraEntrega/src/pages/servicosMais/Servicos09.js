import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos09() {
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
                    src="/img/maisServicos/favelapaz/favelapazlogo.jpg"
                    alt="Logo Favela da Paz"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Instituto Favela Paz</h1>
                <p style={styles.description}>
                  Utilizando cultura e educação como ferramentas de transformação, o instituto busca reduzir a violência e promover a inclusão social em comunidades periféricas por meio de atividades artísticas e esportivas.
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
            O Instituto Favela Paz é uma organização que promove a cultura, a educação e a cidadania como ferramentas para transformar comunidades periféricas. Seu objetivo principal é reduzir a violência e oferecer alternativas positivas para jovens e famílias que vivem em situação de vulnerabilidade. Por meio de oficinas de arte, esporte e educação, o instituto proporciona oportunidades de inclusão social e empoderamento, acreditando que a cultura de paz é um meio eficaz de criar mudanças duradouras nas comunidades.
            <br></br>
            <br></br>
            Além das atividades educativas, o Instituto Favela Paz também promove eventos culturais e diálogos comunitários que fortalecem os laços sociais e incentivam o respeito mútuo. O instituto busca não apenas capacitar os indivíduos, mas também criar um espaço onde a comunidade possa se unir e compartilhar experiências que promovam o crescimento coletivo. Através de suas iniciativas, o Instituto contribui para a construção de uma identidade comunitária mais forte e solidária.
            <br></br>
            <br></br>
            O trabalho do Instituto Favela Paz vai além da oferta de atividades recreativas ou educativas. Ele é um agente de transformação social que combate as desigualdades e incentiva o protagonismo juvenil. Ao investir em jovens e em suas famílias, a organização ajuda a construir um futuro mais promissor e justo, contribuindo para a pacificação e o desenvolvimento sustentável das regiões em que atua.
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
                href="https://faveladapazcom.wordpress.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://faveladapazcom.wordpress.com/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/institutofaveladapaz/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/institutofaveladapaz/
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
                href="https://www.google.com/maps/place/Instituto+Favela+da+Paz/@-23.6947947,-46.7786147,15z/data=!4m6!3m5!1s0x94ce5268a46b6b71:0x3766647cabe62022!8m2!3d-23.6947947!4d-46.7786147!16s%2Fg%2F11csgr4j4w?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Rua Miguel Dionísio Valle 35, São Paulo, SP, 04942-040
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
                href="https://www.instagram.com/institutofaveladapaz/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/institutofaveladapaz/
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
              src="/img/maisServicos/favelapaz/img1.jpg"
              alt="Cozinha"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/favelapaz/img2.jpg"
              alt="Reunião"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/favelapaz/img3.jpg"
              alt="Candomblé"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/favelapaz/img4.jpg"
              alt="Instituto"
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
    backgroundImage: "url(/img/maisServicos/favelapaz/favelapazbanner.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/favelapaz/favelapazlogo.jpg)",
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

export default Servicos09;
