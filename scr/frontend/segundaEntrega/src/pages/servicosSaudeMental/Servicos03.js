import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos03() {
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
                <h1 style={styles.title}>Clínica Ana Maria Popovic</h1>
                <p style={styles.description}>
                  A Clínica Psicológica Ana Maria Poppovic da PUC-SP oferece atendimento psicológico individual, em grupo, casal e família, com foco em diagnóstico, orientação e psicoterapia. Também é campo de estágio para alunos e profissionais de áreas como Serviço Social e Psicanálise, com atendimentos agendados diariamente.
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
            A Clínica Psicológica "Ana Maria Poppovic", vinculada ao curso de Psicologia da PUC-SP, oferece uma variedade de serviços psicológicos à comunidade, incluindo diagnóstico, orientação e psicoterapias com base em diversas abordagens teóricas. Atende pessoas de todas as idades, buscando responder às necessidades psicológicas da população e de instituições. Os atendimentos podem ser individuais, em grupo, de casal ou familiares, sempre com hora marcada.
            <br></br>
            <br></br>
            Além de prestar serviços à comunidade, a clínica é um importante espaço de integração entre a formação acadêmica e a prática clínica. Ela promove pesquisas, apoia a troca de conhecimentos entre profissionais e alunos, e fortalece parcerias institucionais. Isso a torna um campo de estágio essencial para estudantes de Psicologia e áreas correlatas, como Serviço Social e Psicanálise, contribuindo para a formação de novos psicólogos de acordo com padrões contemporâneos.
            <br></br>
            <br></br>
            A clínica se atualiza constantemente, investindo em novas abordagens e padrões de atendimento que acompanham as demandas da sociedade e os avanços da ciência. Seu compromisso com a inovação e a excelência reflete a missão da PUC-SP de prestar serviços à comunidade, ao mesmo tempo em que forma profissionais capacitados e comprometidos com as necessidades da população.
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
                href="https://www.pucsp.br/clinica/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.pucsp.br/clinica/
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href=""
                target="_blank"
                rel="noreferrer"
              >

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
                href="https://www.google.com/maps?sca_esv=643cb0ab8ab0de1a&output=search&q=Rua+Almirante+Pereira+Guimar%C3%A3es,+150+Pacaembu+-+S%C3%A3o+Paulo+-+SP&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiw5nSZwNlVfEzuxKLWTKEHXt5IY2W8nQL2YIQAPJugdgok5mAqyDmQCSyhs_R5ZJypDZG5vhCAxDpRXvSh3VnmemAh5pg4vEx_fXN-61Hu8jKezeUzut7nf-bj-FwBKx5BRAO8d0p30wquA2fhExwyd4ygmJBJEMqiMjhKp-5y7ivwW_SZF3b3QOd_W3yS97zQJzj1g&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                R. Alm. Pereira Guimarães, 150 - PacaembuSão Paulo - SP, 01250-000
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
                href="tel:1138626070"
                target="_blank"
                rel="noreferrer"
              >
                (11) 3862-6070
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
              src="/img/saudeMental/Ana Maria Popovic/img1.jpg"
              alt="Ana maria popovic "
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Ana Maria Popovic/img2.jpg"
              alt="especialidades"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Ana Maria Popovic/img3.jpg"
              alt="sede"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/Ana Maria Popovic/img4.jpg"
              alt="logo"
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
    backgroundImage: "url('/img/saudeMental/Ana Maria Popovic/imgbackground.jpg')", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url('/img/saudeMental/Ana Maria Popovic/imglogo.jpg')",
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

export default Servicos03;
