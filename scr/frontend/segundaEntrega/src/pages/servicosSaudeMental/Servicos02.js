import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos02() {
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
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>SINPESP</h1>
                <p style={styles.description}>
                  Um projeto que oferece atendimento psicanalítico acessível para pessoas de baixa renda, com duas unidades na Vila Mariana e mais de 100 psicanalistas. Fundado em 1970, o SINPESP promove o desenvolvimento da Psicanálise freudiana, preservando seus princípios e métodos. A instituição também oferece suporte jurídico e clínico para seus membros e a comunidade. A Clínica Social Ana Joaquina, parte do projeto, presta assistência psicológica gratuita, reforçando o compromisso social da instituição.
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
            O SINPESP (Sindicato dos Psicanalistas do Estado de São Paulo) oferece atendimento psicanalítico acessível para a população de baixa renda. Com duas unidades na Vila Mariana e mais de 100 psicanalistas, o sindicato trabalha para garantir atendimento de qualidade e inclusão social. A Clínica Social Ana Joaquina, parte do SINPESP, oferece serviços essenciais para a comunidade, promovendo o cuidado psicológico.
            <br></br>
            <br></br>
            Fundado em 1970, o SINPESP passou por diversas conquistas, incluindo a obtenção da carta sindical em 1988, que solidificou sua legalidade como o único sindicato da profissão de psicanalista no estado. O sindicato organiza eventos como palestras, seminários e congressos para o desenvolvimento profissional de seus filiados.
            <br></br>
            <br></br>
            Além dos atendimentos, os profissionais participam de reuniões clínicas, onde discutem casos, trocam experiências e revisam abordagens terapêuticas. Com diferentes formações teóricas, o grupo promove um ambiente de aprendizado contínuo, o que enriquece tanto o atendimento quanto a prática profissional. Esse modelo de supervisão mútua assegura a qualidade e a ética no tratamento oferecido à comunidade.
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
                href="https://sinpesp.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://sinpesp.com.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/sinpesp/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/sinpesp/
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
                href="https://www.google.com/maps?sca_esv=9e556a6b58aef874&output=search&q=sinpesp+endere%C3%A7o&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTrdWqiVbaH6EqK0Fq9hkAkpzZAUrzMRTkxw2Zo-uHyQFA5W1NggT0eZ4FzYQZg2iRGir1qTFkHYVaYoni2BLPmbFFLNjd_jLoL3M1zueaWvI6FH8bjWTcL6PatlY9-ZYiLrscqXzek3oxf9KjGQpNpUI5w92KoU1dJUl4JI7ug7SjXtnjA&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                R. Cel. Artur Godói, 170 - Vila Mariana, São Paulo - SP, 04018-050
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
                href="tel:1155752063"
                target="_blank"
                rel="noreferrer"
              >
                (11) 5575-2063
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
              src="/img/saudeMental/sinpesp/img1.jpg"
              alt="sinpesp"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/sinpesp/img2_.jpg"
              alt="casa sede"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/sinpesp/img3.jpg"
              alt="clinica"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/sinpesp/img4.jpg"
              alt="clinica"
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
    backgroundImage: "url(/img/saudeMental/sinpesp/imgbackground.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/saudeMental/sinpesp/imgbola.jpg)",
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

export default Servicos02;
