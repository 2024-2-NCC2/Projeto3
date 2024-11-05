import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos04() {
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
                <h1 style={styles.title}>Clinica Da Universidade De Guarulhos</h1>
                <p style={styles.description}>
                  A Clínica de Psicologia da Universidade de Guarulhos oferece serviços de psicodiagnóstico, psicoterapia breve para crianças e adultos, além de psicoterapia familiar e de casal. Os atendimentos ocorrem de segunda a sexta, das 8h10 às 21h10, com inscrições feitas pessoalmente em datas específicas e consultas agendadas por telefone. A clínica está localizada na Rua Dr. Nilo Peçanha, 47, Guarulhos.
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
            A Clínica de Psicologia da Universidade de Guarulhos se destaca por oferecer um atendimento psicológico acessível à comunidade local, com foco em tratamentos voltados para psicodiagnóstico, psicoterapia breve tanto infantil quanto para adultos, além de suporte familiar e de casal. Esses serviços são essenciais para auxiliar indivíduos em suas diversas fases da vida, promovendo saúde mental e bem-estar.
            <br></br>
            <br></br>
            Os atendimentos são realizados de segunda a sexta-feira, das 8h10 às 21h10, oferecendo flexibilidade para acomodar diferentes horários e necessidades dos pacientes. As inscrições para o atendimento devem ser feitas presencialmente, em datas específicas, o que garante uma organização eficaz do fluxo de pacientes e um acompanhamento cuidadoso dos casos. O processo inicial inclui uma triagem detalhada para garantir que cada pessoa receba o tratamento mais adequado.
            <br></br>
            <br></br>
            A clínica está localizada no centro de Guarulhos, na Rua Dr. Nilo Peçanha, facilitando o acesso da comunidade local. Com uma equipe formada por profissionais experientes e estagiários sob supervisão, o espaço também se consolida como um importante ambiente de aprendizagem para alunos de Psicologia, garantindo a formação prática em uma clínica bem estruturada e comprometida com a excelência no atendimento. Além de contribuir para a formação acadêmica, a clínica cumpre um papel social fundamental na promoção de saúde mental.
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
                href="https://www.ung.br/estrutura-fisica/clinica-de-psicologia"
                target="_blank"
                rel="noreferrer"
              >
                https://www.ung.br/estrutura-fisica/clinica-de-psicologia
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/ung_universidade/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/ung_universidade/
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
                href="https://www.google.com/maps?sca_esv=643cb0ab8ab0de1a&output=search&q=Rua+Dr.+Nilo+Pe%C3%A7anha,+47+-+Centro,+Guarulhos+-+SP&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiw5nSZwNlVfEzuxKLWTKEHRSFBnt_1tuByamtPeSzvJ--e4pk23xhXkLbKP1eh2Jrp8pNlt3dHcTs4bG9MH1M4oq-Btwy9yKMPOAfMvV_6gToWqfwLf90Xjgk8S4nZbASxAxB7maOMxIXo6K0EdFd4SX6r8eAeLc6W4X3xbn5cniZfeoiYEgAV3G_ZConDZV0aSCc0A&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                R. Dr. Nilo Peçanha, 47 - CentroGuarulhos - SP, 07011-040

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
                href="tel:1124641676."
                target="_blank"
                rel="noreferrer"
              >
                (11) 2464-1676.
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
              src="/img/saudeMental/Clinica Guarulhos/img1.jpg"
              alt="atendimento"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Clinica Guarulhos/img2.jpg"
              alt="logo"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Clinica Guarulhos/img3.jpg"
              alt="universidade"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Clinica Guarulhos/img4.jpg"
              alt="sala de atendimento"
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
    backgroundImage: "url('/img/saudeMental/Clinica Guarulhos/imgbackground.jpg')", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url('/img/saudeMental/Clinica Guarulhos/imglogo.jpg')",
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

export default Servicos04;
