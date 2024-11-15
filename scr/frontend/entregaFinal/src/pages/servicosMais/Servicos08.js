import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos08() {
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
                    src="/img/maisServicos/caosemdono/caologo.jpg"
                    alt="Logo Cão Sem Dono"
                    style={styles.logoImage}
                  />
                </div>
              </div>
              <div style={styles.textContainer}>
                <h1 style={styles.title}>Cão Sem Dono</h1>
                <p style={styles.description}>
                  Dedicada ao resgate e cuidado de cães abandonados, a ONG oferece abrigo e tratamento veterinário, promovendo a adoção responsável e conscientização sobre a posse responsável de animais. 
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
            A ONG Cão Sem Dono é uma organização que se dedica ao resgate de cães abandonados e em situação de risco, fornecendo abrigo, cuidados veterinários e promovendo adoção responsável. A ONG tem como missão garantir que esses animais, muitas vezes vítimas de abandono e maus-tratos, recebam uma nova chance de vida. Por meio de suas ações, a organização busca não apenas acolher os cães, mas também conscientizar a população sobre a importância da posse responsável e da prevenção do abandono, com iniciativas de castração e educação.
            <br></br>
            <br></br>
            As campanhas da Cão Sem Dono envolvem a sociedade em um diálogo sobre o respeito aos animais, promovendo a importância da adoção consciente, onde os futuros donos entendam os deveres e responsabilidades. O processo de adoção é cuidadosamente supervisionado pela ONG para assegurar que os cães encontrem lares adequados e permanentes, onde possam viver com dignidade e amor. Além disso, a organização realiza ações de resgate e emergência, oferecendo assistência médica e acolhimento temporário para cães em situação de perigo.
            <br></br>
            <br></br>
            Com uma atuação proativa e constante, a ONG também colabora com iniciativas públicas e privadas, buscando soluções para o problema crescente do abandono de animais. A Cão Sem Dono, através de suas ações, não apenas melhora a vida dos cães resgatados, mas também contribui para a educação da sociedade, promovendo uma cultura de respeito e cuidado com os animais.
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
                href="https://www.caosemdono.com.br//"
                target="_blank"
                rel="noreferrer"
              >
                https://www.caosemdono.com.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/caosemdono.oficial/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/caosemdono.oficial/
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
                href="https://www.google.com/maps/place/R.+Hon%C3%B3rio+Serpa,+259+-+Jardim+Vergueiro,+S%C3%A3o+Paulo+-+SP,+04174-090/@-23.6319503,-46.6085663,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b6bcc5252c1:0x1a862d92f20af4b5!8m2!3d-23.6319503!4d-46.6085663!16s%2Fg%2F11c14012f_?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Rua Honório Serpa, 259, São Paulo, SP, 04174-090
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
                href="clinica@caosemdono.com.br"
                target="_blank"
                rel="noreferrer"
              >
                clinica@caosemdono.com.br
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
              src="/img/maisServicos/caosemdono/img1.jpg"
              alt="Adoção"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/caosemdono/img2.jpg"
              alt="Cachorros recém nascidos"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/caosemdono/img3.jpg"
              alt="Equipe"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/maisServicos/caosemdono/img4.jpg"
              alt="Adoção cachorro"
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
    backgroundImage: "url(/img/maisServicos/caosemdono/caobanner.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/maisServicos/caosemdono/caologo.jpg)",
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

export default Servicos08;
