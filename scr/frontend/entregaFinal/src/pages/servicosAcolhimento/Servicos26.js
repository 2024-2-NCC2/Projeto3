import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos26() {
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
                <h1 style={styles.title}>Coletivo Arouchianos</h1>
                <p style={styles.description}>
                  Busca garantir a visibilidade e promover a cultura, arte, esporte, política e questões sociais da comunidade LGBTI+ na região do Largo do Arouche
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
            O Coletivo Arouchianos é um grupo ativista e cultural da cidade de São Paulo que atua em prol da defesa dos direitos da população LGBTQIA+, com foco nas pessoas que frequentam ou residem na região da Praça do Arouche, um dos locais historicamente associados à comunidade LGBTQIA+ na cidade.
            <br></br>
            <br></br>
            Principais atividades e objetivos do Coletivo Arouchianos:
            <br></br>
            <br></br>
            Valorização da Memória LGBTQIA+: O grupo tem como um dos seus pilares a preservação da história da comunidade LGBTQIA+ na região do Arouche, reconhecendo sua importância como espaço de resistência e convivência. Eventos e atividades são organizados para celebrar a diversidade e a presença histórica da população LGBTQIA+ no local.
            <br></br>
            <br></br>
            Ativismo e Defesa de Direitos: O Coletivo é engajado na luta contra a violência e a discriminação que afetam a população LGBTQIA+, promovendo ações para garantir o direito à cidade e à convivência nos espaços públicos.
            <br></br>
            <br></br>
            Intervenções Culturais e Sociais: O Coletivo organiza e participa de manifestações artísticas e culturais, como performances, festas e saraus, que ajudam a dar visibilidade à cultura LGBTQIA+ e a promover a inclusão. Essas atividades também servem para ocupar o espaço público de maneira afirmativa.
            <br></br>
            <br></br>
            O Coletivo Arouchianos tem como missão ampliar o diálogo sobre os direitos humanos e criar uma rede de suporte e fortalecimento para a comunidade LGBTQIA+ de São Paulo, especialmente na área do Arouche, que tem uma relevância histórica e simbólica na vida da comunidade.
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
                href="https://www.arouchianos.com.br/mona.html"
                target="_blank"
                rel="noreferrer"
              >
                https://www.arouchianos.com.br/mona.html
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/arouchianos/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/arouchianos/
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
                href="https://www.google.com/maps/place/Largo+do+Arouche,+S%C3%A3o+Paulo+-+SP/@-23.5409804,-46.6491569,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5845d0d20467:0x751bc8ab9619c676!8m2!3d-23.5409853!4d-46.646582!16s%2Fg%2F11x1nl4dr?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >

                Largo do Arouche, São Paulo, Brasil
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
                href="tel:11948745068"
                target="_blank"
                rel="noreferrer"
              >
                (11) 94874 - 5068
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
              src="/img/acolhimento/arouchianos/img3.png"
              alt="Imagem 1"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/arouchianos/img4.jpg"
              alt="Imagem 2"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/arouchianos/img1.png"
              alt="Imagem 3"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/arouchianos/img2.png"
              alt="Imagem 4"
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
    backgroundImage: "url(/img/acolhimento/arouchianos/back.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/acolhimento/arouchianos/logoCirculo.jpeg)",
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

export default Servicos26;
