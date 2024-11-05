import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos11() {
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
                    src="/img/maisServicos/graacc/graacclogo.jpg"
                    alt="Logo GRAAC"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>GRAACC</h1>
                <p style={styles.description}>
                  O Grupo de Apoio ao Adolescente e à Criança com Câncer fornece tratamento especializado e gratuito para jovens com câncer, investindo também em pesquisa e formação de profissionais na área.
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
            O GRAACC (Grupo de Apoio ao Adolescente e à Criança com Câncer) é uma instituição sem fins lucrativos que oferece tratamento especializado e de alta complexidade a crianças e adolescentes com câncer. Desde sua fundação em 1991, o GRAACC tem se destacado por oferecer acesso gratuito aos tratamentos mais avançados na oncologia pediátrica, sempre com o objetivo de alcançar altos índices de cura e melhorar a qualidade de vida dos pacientes. A organização conta com um hospital especializado, que é referência no Brasil e oferece desde consultas até tratamentos complexos, como cirurgias e transplantes.
            <br></br>
            <br></br>
            Além de prestar cuidados médicos, o GRAACC investe em pesquisa e na formação de profissionais de saúde especializados em oncologia pediátrica, garantindo a continuidade e o aprimoramento de seus serviços. A instituição também realiza campanhas de conscientização e arrecadação de recursos, mobilizando a sociedade para manter suas atividades e expandir sua capacidade de atendimento. A transparência e a eficiência na gestão dos recursos são marcas registradas do GRAACC, o que reforça sua credibilidade e compromisso com a causa.
            <br></br>
            <br></br>
            A missão do GRAACC vai além do tratamento médico: a organização busca proporcionar dignidade, esperança e uma chance real de cura para crianças e adolescentes com câncer. Com um atendimento humanizado e especializado, o GRAACC tem contribuído para aumentar as chances de cura de milhares de pacientes, garantindo que eles possam voltar a sonhar com o futuro.
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
                href="https://graacc.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://graacc.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/instagraacc/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/instagraacc/
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
                href="https://www.google.com/maps/place/GRAACC/@-23.5982227,-46.6422768,15z/data=!4m2!3m1!1s0x0:0xd7abb48c53783ee1?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                Rua Pedro de Toledo 572, São Paulo, SP, 04039-001
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
                href="tel:1150808400"
                target="_blank"
                rel="noreferrer"
              >
                (11) 5080-8400
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
              src="/img/maisServicos/graacc/img1.jpg"
              alt="Médica"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/graacc/img2.jpg"
              alt="Sussurando"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/graacc/img3.jpg"
              alt="Visita Personagens"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/graacc/img4.jpg"
              alt="Brincando"
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
    backgroundImage: "url(/img/maisServicos/graacc/graaccbanner.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/graacc/graacclogo.jpg)",
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

export default Servicos11;
