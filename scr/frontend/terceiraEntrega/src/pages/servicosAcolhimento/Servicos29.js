import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos29() {
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
                <h1 style={styles.title}>Organização Social de Saúde Casa de Isabel</h1>
                <p style={styles.description}>
                  Centro de apoio à mulher, à criança e ao adolescente vítimas de violência doméstica e em situação de risco
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
            A Casa de Isabel é uma organização social localizada no bairro do Itaim Paulista, em São Paulo. Desde 1996, ela tem como missão oferecer apoio psicoterapêutico e assistência a mulheres, crianças e adolescentes que são vítimas de violência doméstica e estão em situação de risco. A instituição atua em ações de promoção da saúde mental e também desenvolve atividades de pesquisa, ensino e prevenção, especialmente voltadas para a redução de riscos relacionados ao uso de substâncias como álcool, tabaco e drogas.
            <br></br>
            <br></br>
            Além de oferecer atendimentos individuais e em grupo, a Casa de Isabel promove projetos de acolhimento e psicoterapia para homens agressores, ajudando no processo de ressocialização e conscientização. A organização valoriza a dignidade humana e busca proteger os direitos das vítimas, criando um ambiente acolhedor, com o objetivo de restaurar a autoestima e promover a conscientização dos direitos individuais.
            <br></br>
            <br></br>
            A organização também realiza ações comunitárias e se destaca pelo grande número de atendimentos prestados mensalmente, sendo referência na zona leste de São Paulo
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
                href="https://casadeisabel.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://casadeisabel.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/osscasadeisabel/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/osscasadeisabel/
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
                href="https://www.google.com/maps/dir//R.+Jo%C3%A3o+de+Castilho+Pinto,+66+-+Itaim+Paulista,+S%C3%A3o+Paulo+-+SP,+08120-370/@-23.5037966,-46.4769051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce64820ebc35fd:0xc426ee620d5c0e4d!2m2!1d-46.3945058!2d-23.5038133?entry=ttu&g_ep=EgoyMDI0MTAwNS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                R. João de Castilho Pinto, 66 - Itaim Paulista, São Paulo - SP, 08120-370
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
                href="tel:1120253271"
                target="_blank"
                rel="noreferrer"
              >
                (11) 2025-3271
              </a> &nbsp;
              <a
                style={{ color: "#FFF" }}
                href="tel:1125661110"
                target="_blank"
                rel="noreferrer"
              >
                (11) 2566-1110
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
              src="/img/acolhimento/isabel/isa1.jpeg"
              alt="Isabel"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/isabel/isa2.jpeg"
              alt="Isabel"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/isabel/isa3.jpeg"
              alt="Isabel"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/isabel/isa.jpeg"
              alt="Isabel"
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
    backgroundImage: "url(/img/acolhimento/isabel/isaback.jpeg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/acolhimento/isabel/logo.jpeg)",
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

export default Servicos29;
