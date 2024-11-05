import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos01() {
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
                <h1 style={styles.title}>Atendimento Psicológico Paróquia São Luís Gonzaga</h1>
                <p style={styles.description}>
                  Somos um grupo de psicólogos voluntários que oferece atendimento gratuito às quintas-feiras na Paróquia São Luis Gonzaga, na Avenida Paulista, 2378. Atendemos a todos, sem discriminação de raça, credo, gênero ou orientação sexual.
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
            O Serviço de Psicologia da Paróquia São Luis Gonzaga oferece atendimento psicológico gratuito todas as quintas-feiras, localizado na Avenida Paulista, 2378. O grupo é formado por psicólogos voluntários com CRP ativo, atendendo pessoas de toda a Grande São Paulo, sem qualquer distinção de raça, gênero, credo ou orientação sexual. Iniciado em 2006, o projeto faz parte do Núcleo de Promoção Humana e Social da paróquia, surgido da necessidade de apoiar casos mais complexos que demandavam acompanhamento especializado.
            <br></br>
            <br></br>
            O serviço realiza triagens para identificar as necessidades dos pacientes, encaminhando-os para psicoterapia breve, individual ou em grupo, com duração de até 12 sessões. Em alguns casos, os pacientes são direcionados para parceiros que oferecem orientação jurídica, psiquiátrica ou outros serviços públicos. Esse processo garante que os indivíduos recebam o suporte adequado, seja na paróquia ou em instituições parceiras com boa reputação.
            <br></br>
            <br></br>
            Além dos atendimentos, os profissionais participam de reuniões clínicas, onde discutem casos, trocam experiências e revisam abordagens terapêuticas. Com diferentes formações teóricas, o grupo promove um ambiente de aprendizado contínuo, o que enriquece tanto o atendimento quanto a prática profissional. Esse modelo de supervisão mútua assegura a qualidade e a ética no tratamento oferecido à comunidade.
            <br></br>
            <br></br>
            O serviço cresce continuamente e já ultrapassa mil atendimentos por ano. Além de fornecer acolhimento em momentos de crise, o projeto tem se mostrado um espaço de pertencimento para os pacientes, oferecendo reflexão e suporte emocional. Para os psicólogos voluntários, o trabalho também é uma oportunidade de aprendizado prático, que complementa suas experiências profissionais em outros locais de atuação.
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
                href="http://www.saoluis.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                http://www.saoluis.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/paroquiaslg21/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/paroquiaslg21/
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
                href="https://www.google.com/maps/place/Av.+Paulista,+2378+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-300/@-23.5563169,-46.6640946,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce582d680ed021:0xf37b1dd93128c8ec!8m2!3d-23.5563169!4d-46.6615197!16s%2Fg%2F11bw3zj2np?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Av. Paulista, 2378 - Bela Vista, São Paulo - SP, 01310-300
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
                href="tel:1132315954"
                target="_blank"
                rel="noreferrer"
              >
                (11) 3231 5954
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
              src="/img/saudeMental/paroquia/img1.jpg"
              alt="Paroquia"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/paroquia/img2.jpg"
              alt="Igreja"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/paroquia/img3.jpg"
              alt="logo"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/paroquia/img4.jpg"
              alt="ajudados"
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
    backgroundImage: "url(/img/saudeMental/paroquia/img5background.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/saudeMental/paroquia/img3.jpg)",
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

export default Servicos01;
