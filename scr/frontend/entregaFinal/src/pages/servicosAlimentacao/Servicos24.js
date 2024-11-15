import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Servicos24() {
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
                <h1 style={styles.title}>Orgânico Solidario</h1>
                <p style={styles.description}>
                  O Orgânico Solidário é uma organização que distribui cestas de alimentos orgânicos para famílias em vulnerabilidade, conectando pequenos produtores rurais a comunidades carentes. O projeto, que surgiu na pandemia, promove a segurança alimentar com alimentos saudáveis e apoia a agricultura sustentável.
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
            O Orgânico Solidário é uma organização que tem como missão promover a segurança alimentar de famílias em situação de vulnerabilidade, por meio da distribuição de cestas de alimentos orgânicos. O projeto surgiu durante a pandemia de COVID-19, buscando conectar pequenos produtores rurais a comunidades carentes, garantindo o acesso a alimentos saudáveis e de qualidade. O foco da organização é unir a causa da segurança alimentar com o incentivo à agricultura orgânica e sustentável, apoiando tanto as famílias que necessitam de alimentos quanto os agricultores familiares.
            <br></br>
            <br></br>
            Além da distribuição de cestas, o Orgânico Solidário promove campanhas de arrecadação de recursos e parcerias com empresas e organizações para ampliar o impacto de suas ações. O projeto também trabalha na conscientização sobre a importância de uma alimentação saudável e o consumo de produtos orgânicos, mostrando que é possível combater a fome de maneira sustentável. Com uma forte rede de solidariedade, o Orgânico Solidário já beneficiou milhares de famílias e fortalece o elo entre a saúde alimentar e a preservação ambiental.
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
                href="https://organicosolidario.org/"
                target="_blank"
                rel="noreferrer"
              >
                https://organicosolidario.org/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/organicosolidario/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/organicosolidario/
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
              src="/img/alimentacao/org/img1.jpg"
              alt="Caminhão"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/org/img2.jpg"
              alt="Alface"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/org/img3.jpg"
              alt="Caixas"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/org/img4.jpg"
              alt="Crianças"
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
    backgroundImage: "url(/img/alimentacao/org/backorg.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/alimentacao/org/logo-org.jpg)",
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

export default Servicos24;
