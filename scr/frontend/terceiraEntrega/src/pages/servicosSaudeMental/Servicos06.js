import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos06() {
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
                  A ABPS, fundada em 1970, promove a formação em Psicodrama e oferece atendimento psicoterapêutico à comunidade, além de parcerias com ONGs e instituições. Sua missão é perpetuar o Psicodrama e desenvolver o ser humano. A visão da instituição é ser referência em Psicodrama aplicado em projetos clínicos, educacionais e organizacionais. A ABPS valoriza equidade, inclusão, criatividade e responsabilidade social, em um ambiente acolhedor e colaborativo.
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
            A Associação Brasileira de Psicodrama e Sociodrama (ABPS), fundada em 1970, é uma instituição dedicada à formação de profissionais em Psicodrama e ao oferecimento de atendimento psicoterapêutico à comunidade. A ABPS também mantém parcerias com ONGs, instituições sociais e educacionais, promovendo intervenções baseadas na metodologia psicodramática.
            <br></br>
            <br></br>
            Com foco no desenvolvimento humano, a missão da ABPS é perpetuar o Psicodrama por meio de uma formação de excelência. A visão da instituição é se consolidar como referência na aplicação dessa metodologia em projetos clínicos, educacionais e organizacionais, incluindo o terceiro setor.
            <br></br>
            <br></br>
            A ABPS valoriza a equidade, inclusão, criatividade e responsabilidade social, promovendo um ambiente acolhedor e colaborativo. Sua atuação é pautada no compartilhamento de conhecimento e na coconstrução de relações saudáveis e transformadoras.
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
                href="https://abps.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://abps.com.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/abps_oficial/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/abps_oficial/
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
                href="https://www.google.com/maps?sca_esv=261e9e531e616e75&output=search&q=Rua+Arab%C3%A9,+36+%E2%80%93+Vila+Clementino,+S%C3%A3o+Paulo+%E2%80%93+CEP:+04042-0703&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiw5nSZwNlVfEzuxKLWTKEHRSFBnt_1tuByamtPeSzvJ--e4pk23xhXkLbKP1eh2Jrp8pNlt3dHcTs4bG9MH1M4vXPSnqbL3RlrSIJ3nr_zcqdYJFOFeVP52LcaXjJSKV9e_zMZXsFKoj_-geL1Cm2v8Mc6W6A9WT365S638Wny_PCqVZR_cVUpyAuPek3d48z2c6sYQ&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                Rua Arabé, 36 – Vila Clementino, São Paulo – CEP: 04042-070
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
                href="tel:1155755994"
                target="_blank"
                rel="noreferrer"
              >
                (11) 5575-5994
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
              src="/img/saudeMental/ABPS/img1.jpg"
              alt="mais serviços"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/ABPS/img2.jpg"
              alt="abps"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/ABPS/img3.jpg"
              alt="Abraço"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/ABPS/img4.jpg"
              alt="mente"
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
    backgroundImage: "url(/img/saudeMental/ABPS/imgbackground.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/saudeMental/ABPS/imglogo.jpg)",
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

export default Servicos06;
