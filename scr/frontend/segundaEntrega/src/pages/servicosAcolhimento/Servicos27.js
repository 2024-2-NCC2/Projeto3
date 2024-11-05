import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos27() {
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
                <h1 style={styles.title}>Centro Social Santo Dias</h1>
                <p style={styles.description}>
                  Organização da Sociedade Civil sem fins econômicos, oferecendo programas e serviços de assistência e desenvolvimento social e de educação que beneficiam o desenvolvimento integral de crianças, adolescentes, jovens, adultos e idosos em situação de vulnerabilidade social.
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
            O Centro Social Santo Dias, situado no bairro do Butantã, em São Paulo, é uma instituição que se dedica a prestar serviços de assistência social, desenvolvimento humano e educação para a comunidade local e arredores. Fundada em 1987, a organização atua sem fins lucrativos, e sua missão é atender, principalmente, pessoas em situação de vulnerabilidade social, promovendo seu desenvolvimento integral.
            <br></br>
            <br></br>
            O centro oferece uma ampla gama de programas sociais que buscam apoiar crianças, adolescentes, jovens, adultos e idosos, integrando diferentes gerações em ações voltadas ao fortalecimento das famílias e da comunidade. Algumas de suas atividades incluem:
            <br></br>
            <br></br>
            Educação e Capacitação Profissional: O Centro Social Santo Dias promove cursos de capacitação e oficinas para jovens e adultos, voltados à inserção no mercado de trabalho, ampliando as chances de empregabilidade e geração de renda.
            <br></br>
            <br></br>
            Programas de Apoio à Criança e Adolescente: O espaço oferece atividades socioeducativas, culturais e esportivas que visam o desenvolvimento integral de crianças e adolescentes, com o objetivo de afastá-los de situações de risco e promover o bem-estar físico e emocional.
            <br></br>
            <br></br>
            Assistência a Idosos: Além de atender a juventude, o Centro também realiza ações voltadas para a terceira idade, promovendo atividades de convivência, lazer e saúde, garantindo a inclusão e o apoio necessário para essa faixa etária.
            <br></br>
            <br></br>
            Apoio às Famílias em Situação de Vulnerabilidade: A entidade oferece programas de atendimento às famílias, visando a melhoria das condições de vida, por meio de doações, orientação social e acesso a serviços básicos.
            <br></br>
            <br></br>
            Além desses serviços, o Centro Social Santo Dias busca criar um ambiente de convivência comunitária, onde valores como solidariedade, cidadania e inclusão social são fomentados. A entidade depende de doações, voluntariado e parcerias com órgãos públicos e privados para continuar desenvolvendo suas atividades e expandir seu impacto positivo na comunidade.
            <br></br>
            <br></br>
            Seus projetos sociais são estruturados para garantir um atendimento humanizado e universal, respeitando a dignidade e os direitos dos beneficiários. O trabalho realizado no Centro Social Santo Dias é essencial para o fortalecimento do tecido social da região, contribuindo para a construção de uma sociedade mais justa e solidária.
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
                href="https://santodias-sp.org.br/"
                target="_blank"
                rel="noreferrer"
              >
                https://santodias-sp.org.br/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/cssantodias/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/cssantodias/
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
                href="https://www.google.com/maps/dir/-23.5601802,-46.6415726/Av.+Otac%C3%ADlio+Tomanik,+1555+-+Rio+Pequeno,+S%C3%A3o+Paulo+-+SP,+05363-101/@-23.5758457,-46.778515,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce55e1218a3b07:0xba24eb08834f5411!2m2!1d-46.7516161!2d-23.5669655?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Av. Otacílio Tomanik, 1555 - Rio Pequeno, São Paulo - SP, 05363-101
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
                href="tel:11983151689"
                target="_blank"
                rel="noreferrer"
              >
                (11) 98315 - 1689
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
              src="/img/acolhimento/santodias/sd1.jpg"
              alt="Reunião"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/santodias/sd2.jpg"
              alt="Professora e criança"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/santodias/sd3.jpg"
              alt="Ar livre"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/acolhimento/santodias/sd4.jpg"
              alt="Festa"
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
    backgroundImage: "url(/img/acolhimento/santodias/sdback.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/acolhimento/santodias/sdcircle.png)",
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

export default Servicos27;
