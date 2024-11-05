import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos19() {
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
                <h1 style={styles.title}>Bom-Prato</h1>
                <p style={styles.description}>
                  Criado em 28 de dezembro de 2.000, o programa Bom Prato tem como objetivo oferecer refeições saudáveis e de alta qualidade a um custo acessível à população em vulnerabilidade social.
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
            O Bom Prato é um programa social criado pelo Governo do Estado de São Paulo em 2000, com o objetivo de oferecer refeições saudáveis e de baixo custo à população de baixa renda. A iniciativa visa combater a fome e garantir segurança alimentar, principalmente em áreas urbanas, onde o custo de vida é mais elevado. O programa atende principalmente pessoas em situação de vulnerabilidade social, como desempregados, moradores de rua e aposentados.
            <br></br>
            <br></br>
            O Bom Prato se destaca pelos preços acessíveis das refeições. Atualmente, o almoço custa R$ 1,00, e o café da manhã é oferecido por apenas R$ 0,50. Esses valores são subsidiados pelo governo para garantir que as refeições sejam acessíveis a todos. Além disso, a qualidade nutricional é uma prioridade. As refeições são preparadas com base em recomendações nutricionais, garantindo que os usuários recebam uma alimentação balanceada e adequada. O almoço, por exemplo, oferece cerca de 1.200 calorias e inclui arroz, feijão, carne, salada, suco e sobremesa.
            <br></br>
            <br></br>
            Ao longo dos anos, o programa cresceu e expandiu sua atuação, com várias unidades espalhadas por São Paulo e outros municípios do estado. O Bom Prato tem um impacto positivo direto na vida de milhões de pessoas, ajudando a mitigar os efeitos da pobreza, promover a saúde e reduzir a insegurança alimentar nas comunidades atendidas.
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
                href="https://www.desenvolvimentosocial.sp.gov.br/acoes-de-protecao-social/programa-bom-prato/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.desenvolvimentosocial.sp.gov.br/acoes-de-protecao-social/programa-bom-prato/
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
              <span style={{ color: "#FFF" }}>Endereço </span>{" "}
              <span style={{ color: "#9B0202" }}></span>
            </h2>
            <p style={{ color: "#FFF" }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ marginRight: "8px" }}
              />
              Endereço:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.google.com.br/maps/place/S%C3%A3o+Paulo,+SP/@-23.6820635,-46.9249594,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                São Paulo, SP
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
              src="/img/alimentacao/bomprato/img-bp1.png"
              alt="Almoço"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/bomprato/img-bp2.png"
              alt="Cozinheiro"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/bomprato/img-bp3.png"
              alt="Janta"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/alimentacao/bomprato/img-bp4.png"
              alt="Pessoas sendo servidas"
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
    backgroundImage: "url(/img/alimentacao/bomprato/BackBom.jpg", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/alimentacao/bomprato/circulobom.jpg)",
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

export default Servicos19;
