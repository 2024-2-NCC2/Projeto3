import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos21() {
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
                    src="/img/acolhimento/casa1/casa1.jpeg"
                    alt="Logo Casa1"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Pão do Povo da Rua</h1>
                <p style={styles.description}>
                  O projeto Pão do Povo da Rua existe desde 2020 e alimenta diariamente 1.200 pessoas em situação de rua, no Centro de São Paulo.
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
            O Projeto Pão do Povo da Rua é uma iniciativa social dedicada a oferecer alimentação a pessoas em situação de rua em São Paulo. Fundado em 2014, o projeto distribui pães e outros alimentos a indivíduos que enfrentam a fome e a vulnerabilidade, garantindo que aqueles que vivem nas ruas tenham acesso ao básico para sua sobrevivência. A organização é movida por voluntários e doações da comunidade, que se unem para preparar e distribuir as refeições diariamente, priorizando o atendimento humanizado e o respeito à dignidade de cada pessoa.
            <br></br>
            <br></br>
            Além da distribuição de alimentos, o Pão do Povo da Rua também atua como um agente de conscientização sobre a realidade da população de rua, buscando mobilizar a sociedade para ações de apoio e inclusão social. O projeto promove eventos, campanhas de arrecadação e parcerias com outras entidades para ampliar o impacto de suas atividades, sempre com o foco em minimizar os efeitos da fome e da exclusão social. Através do engajamento solidário, o projeto se destaca por sua dedicação em oferecer não apenas alimento físico, mas também esperança e cuidado.
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
                href="https://www.paodopovodarua.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.paodopovodarua.com.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/paodopovodarua/"
                target="_blank"
                rel="noreferrer"
              >
                hhttps://www.instagram.com/paodopovodarua/
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
                href="https://www.google.com.br/maps/place/R.+Dr.+Pedro+Arbues,+147+-+Luz,+S%C3%A3o+Paulo+-+SP,+01105-030/@-23.5336397,-46.6326675,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce58f65d49e56b:0x8abe5a79623a98f0!8m2!3d-23.5336397!4d-46.6300926!16s%2Fg%2F11c5nbfsyl?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                R. Dr. Pedro Arbues, 147 - Bom Retiro, São Paulo - SP, 01105-030
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
                href="tel:1133131888"
                target="_blank"
                rel="noreferrer"
              >
                (11) 3313-1888
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
              src="/img/alimentacao/PaoPovo/img1.jpg"
              alt="Food truck"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/PaoPovo/img2.jpg"
              alt="Pães"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/PaoPovo/img3.jpg"
              alt="Padeiros"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/PaoPovo/img4.jpg"
              alt="Pães e padeiros"
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
    backgroundImage: "url(/img/alimentacao/PaoPovo/PaoBack.png)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/alimentacao/PaoPovo/PaoLogo2.jpg)",
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

export default Servicos21;
