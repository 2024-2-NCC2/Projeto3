import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos07() {
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
                    src="/img/maisServicos/carrapicho/carrapichologo.jpg"
                    alt="Logo Carrapicho"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>ASSOCIAÇÃO VIDA CARRAPICHo</h1>
                <p style={styles.description}>
                  Esta ONG promove o desenvolvimento comunitário e a cidadania em áreas vulneráveis, focando em projetos que melhoram a qualidade de vida por meio de educação, saúde e inclusão social.
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
            A Associação Vida Carrapicho é uma organização não governamental que trabalha para promover o desenvolvimento comunitário e a cidadania em áreas vulneráveis. Seus projetos são focados em melhorar a qualidade de vida dos moradores, abordando questões como educação, saúde, meio ambiente e inclusão social. A ONG busca integrar a comunidade em atividades que estimulem o engajamento coletivo, permitindo que as pessoas possam contribuir para a transformação de seu ambiente e, consequentemente, para o desenvolvimento sustentável da região.
            <br></br>
            <br></br>
            Por meio de oficinas, eventos comunitários e ações de conscientização, a Associação Vida Carrapicho se esforça para fortalecer os laços sociais e empoderar os moradores. A organização acredita que o desenvolvimento de uma comunidade depende não apenas de iniciativas externas, mas também do envolvimento ativo de seus integrantes. Dessa forma, ela promove oportunidades que capacitam os indivíduos a resolverem seus próprios desafios, cultivando um sentimento de pertencimento e de responsabilidade compartilhada.
            <br></br>
            <br></br>
            Além disso, a ONG atua como facilitadora na criação de redes de apoio que envolvem outros atores sociais e institucionais, fortalecendo o impacto de suas iniciativas. Com uma abordagem integrada e sustentável, a Associação Vida Carrapicho desempenha um papel fundamental na construção de uma sociedade mais justa e equitativa, onde todos têm a chance de prosperar.
            interdum.
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
                href="https://www.atados.com.br/ong/associacao-vida-carrapicho"
                target="_blank"
                rel="noreferrer"
              >
                https://www.atados.com.br/ong/associacao-vida-carrapicho
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/associacaovidacarrapicho/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/associacaovidacarrapicho/
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
                href="https://www.google.com/maps/place/R.+Ira%C3%AD+de+Minas,+202+-+Jardim+Paraguacu,+S%C3%A3o+Paulo+-+SP,+03941-040/@-23.5946667,-46.4981829,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce67956b5a7459:0x9d5694b4454f7501!8m2!3d-23.5946667!4d-46.4981829!16s%2Fg%2F11c5jxq6mc?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Rua Iraí de Minas 202, São Paulo, SP, 03941-040
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
                href="tel:11940595320"
                target="_blank"
                rel="noreferrer"
              >
                (11) 94059-5320
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
              src="/img/maisServicos/carrapicho/img1.jpg"
              alt="Crianças no cinema"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/carrapicho/img2.jpg"
              alt="Barbeiro"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/carrapicho/img3.jpg"
              alt="Acolhimento"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/carrapicho/img4.jpg"
              alt="Comidas"
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
    backgroundImage: "url(/img/maisServicos/carrapicho/img1.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/carrapicho/carrapichologo.jpg)",
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

export default Servicos07;
