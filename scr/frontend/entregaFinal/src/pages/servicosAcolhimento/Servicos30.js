import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos30() {
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
                <h1 style={styles.title}>Casa Florescer</h1>
                <p style={styles.description}>
                  Um centro de acolhida pioneiro no Brasil que acolhe e atende mulheres transexuais e travestis em situação de vulnerabilidade
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
            O Centro  de Acolhida Especial para Travestis e Mulheres Transexuais Casa   Florescer  iniciou suas atividades em  1 de março de 2016, fica localizada no bairro do bom retiro em  São Paulo. A casa possui  30 vagas,  destinadas a mulheres transexuais e travestis em situação de vulnerabilidade social, devido à exclusão do ambiente escolar dificuldades com a convivência familiar devido a identidade de gênero, falta de oportunidades, preconceito, outras violações de direitos.
            <br></br>
            <br></br>
            Sua missão é acolher travestis e mulheres transexuais, compatibilizar o respeito à identidade de gênero, à autonomia e às escolhas individuais com o oferecimento de oportunidades e promoção dos direitos de cidadania. Promover inclusão social por meio de ações transversais como: saúde, educação, meio Ambiente, esportes, cultura, lazer, assistência social, trabalho, habitação. O trabalho desenvolvido busca  favorecer oportunidades e articulação de  rede propiciando a representatividade dessa população.
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
                href="https://cadiversidade.wixsite.com/florescer"
                target="_blank"
                rel="noreferrer"
              >
                https://cadiversidade.wixsite.com/florescer
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/casaflorescer1/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/casaflorescer1/
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
                href="https://www.google.com/maps/dir/-23.5573155,-46.6373298/Rua+Prates,+1101+-+Bom+Retiro,+S%C3%A3o+Paulo+-+SP,+01121-000/@-23.5426657,-46.6529171,6081m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce5863d5addd85:0x83bdc661dc62dcdf!2m2!1d-46.6344045!2d-23.5243916?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Rua Prates, 1101 - Bom Retiro, São Paulo - SP, 01121-000
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
                href="tel:1132280502"
                target="_blank"
                rel="noreferrer"
              >
                (11) 3228-0502

              </a> &nbsp;
              <a
                style={{ color: "#FFF" }}
                href="tel:11985278552"
                target="_blank"
                rel="noreferrer"
              >
                (11) 98527-8552
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
              src="/img/acolhimento/florescer/flo1.jpg"
              alt="Conversa"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/florescer/flo2.jpg"
              alt="Mural"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/florescer/flo3.jpg"
              alt="Espaço"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/florescer/flo4.jpg"
              alt="Foto em grupo"
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
    backgroundImage: "url(/img/acolhimento/florescer/BACK.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/acolhimento/florescer/circle.jpg)",
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

export default Servicos30;
