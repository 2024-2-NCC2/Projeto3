import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos10() {
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
                    src="/img/maisServicos/adus/aduslogo.jpg"
                    alt="Logo Adus"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Instituto Adus</h1>
                <p style={styles.description}>
                  Voltado para a integração de refugiados e imigrantes no Brasil, o instituto oferece apoio educacional, profissional e psicológico, além de sensibilizar a sociedade sobre suas realidades.
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
            O Instituto Adus é uma organização voltada para a integração de refugiados e imigrantes no Brasil, com o objetivo de promover sua inclusão social, cultural e econômica. O instituto oferece uma ampla gama de serviços, como aulas de português, capacitação profissional, apoio psicológico e orientação jurídica, ajudando aqueles que chegam ao país em situações de vulnerabilidade a reconstruir suas vidas. Através desses programas, o Adus busca garantir que os refugiados e imigrantes tenham as ferramentas necessárias para se adaptar ao Brasil e se tornarem membros ativos da sociedade.
            <br></br>
            <br></br>
            Além de prestar apoio direto, o Instituto Adus também realiza campanhas de conscientização e sensibilização, buscando combater o preconceito e promover a empatia em relação à situação dos refugiados e imigrantes. Essas iniciativas incluem palestras, eventos culturais e parcerias com empresas para criar oportunidades de emprego. O Adus atua como uma ponte entre os recém-chegados e a sociedade brasileira, facilitando o diálogo intercultural e promovendo o respeito à diversidade.
            <br></br>
            <br></br>
            A atuação do Adus é fundamental para criar um ambiente de acolhimento e inclusão. Sua abordagem holística ajuda a garantir que os refugiados e imigrantes não apenas sobrevivam no novo país, mas que prosperem, adquirindo autonomia e contribuindo para o desenvolvimento social e econômico do Brasil. Com sua missão de integração, o Instituto Adus desempenha um papel crucial na construção de uma sociedade mais justa e igualitária.
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
                href="https://adus.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://adus.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/adusbrasil/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/adusbrasil/
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
                href="https://www.google.com/maps/place/Adus/@-23.5441116,-46.6374989,15z/data=!4m6!3m5!1s0x94ce585144923aa7:0x34c51e91ad3a9e85!8m2!3d-23.5441116!4d-46.6374989!16s%2Fg%2F11clwpyjkn?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Avenida São João 313, 11º Andar, São Paulo, SP, 01035-000
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
                href="tel:1132250439"
                target="_blank"
                rel="noreferrer"
              >
                (11) 3225-0439
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
              src="/img/maisServicos/adus/img1.jpg"
              alt="Equipe"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/adus/img2.jpg"
              alt="Palestra"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/adus/img3.jpg"
              alt="Curso LGBTQIA+"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/adus/img4.jpg"
              alt="Formação curso Informatica"
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
    backgroundImage: "url(/img/maisServicos/adus/adusbanner.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/adus/aduslogo.jpg)",
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

export default Servicos10;
