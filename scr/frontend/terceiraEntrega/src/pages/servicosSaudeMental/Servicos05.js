import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

function Servicos05() {
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
                <h1 style={styles.title}>Atendimento Psicológico Mackenzie</h1>
                <p style={styles.description}>
                  O Serviço-Escola de Psicologia da Mackenzie oferece atendimento psicológico gratuito à comunidade, vinculado ao curso de Psicologia da universidade. A Clínica Psicológica Alvino Augusto de Sá realiza sessões clínicas e socioeducativas supervisionadas por profissionais qualificados. As modalidades de atendimento incluem psicoterapia breve, acolhimento, avaliação neuropsicológica, entre outros, com grupos voltados para diferentes necessidades. Inscrições para atendimento acontecem presencialmente no dia 24 de setembro de 2024, das 14h às 17h, com vagas limitadas.
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
            O Serviço-Escola de Psicologia da Universidade Presbiteriana Mackenzie, ligado ao curso de Psicologia do Centro de Ciências Biológicas e da Saúde (CCBS), oferece uma série de atendimentos psicológicos gratuitos à comunidade. Por meio de projetos de extensão e estágios supervisionados, o serviço promove o cuidado psicológico, a prevenção e a promoção de bem-estar. As atividades ocorrem na Clínica Psicológica Alvino Augusto de Sá e em laboratórios técnicos como o LEVV, voltado para estudos sobre violência e vulnerabilidade, e o LABPOT, focado em Psicologia Organizacional e do Trabalho.
            <br></br>
            <br></br>
            Na Clínica Psicológica, são oferecidos atendimentos individuais e em grupo, em várias áreas da Psicologia, para pessoas de todas as idades. Essas sessões são conduzidas por estagiários do curso de Psicologia, supervisionados por profissionais com registro ativo no Conselho Regional de Psicologia. Os atendimentos são semestrais, de curta duração e sofrem interrupções durante os períodos de férias acadêmicas. Dentre as modalidades disponíveis estão acolhimento e triagem, psicoterapias breves, avaliação neuropsicológica e grupos terapêuticos para diferentes públicos, como adolescentes, mulheres e pessoas em situação de vulnerabilidade social.
            <br></br>
            <br></br>
            As inscrições para os atendimentos psicológicos oferecidos pelo Serviço-Escola acontecem presencialmente no dia 24 de setembro de 2024, das 14h às 17h, na Rua Piauí, em Higienópolis, São Paulo. As vagas são limitadas e a inscrição deve ser feita exclusivamente no local, sem a possibilidade de registro online ou por telefone. Todos os serviços disponibilizados são gratuitos, o que amplia o acesso da população a cuidados psicológicos de qualidade.
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
                href="https://www.mackenzie.br/atendimento-a-comunidade/servico-escola-de-psicologia-mackenzie"
                target="_blank"
                rel="noreferrer"
              >
                https://www.mackenzie.br/atendimento-a-comunidade/servico-escola-de-psicologia-mackenzie
              </a>
            </p>
            <p style={{ color: "#FFF" }}>
              Rede social:{" "}
              <a
                style={{ color: "#FFF" }}
                href="https://www.instagram.com/psicologia_mackenzie/p/CzBfXvlLEEy/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.instagram.com/psicologia_mackenzie/p/CzBfXvlLEEy/
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
                href="https://www.google.com/maps?sca_esv=b5fe372bbb1d1118&output=search&q=Endere%C3%A7o:+Rua+Piau%C3%AD,+181+%E2%80%93+Higien%C3%B3polis+%E2%80%93+S%C3%A3o+Paulo+%E2%80%93+SP+%E2%80%93+CEP:+01241-001&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiw5nSZwNlVfEzuxKLWTKEHXt5IY2W8nQL2YIQAPJugdgok5mAqyDmQCSyhs_R5ZJy3dhkrFIeHrc3egpfzijQTxdy86Sk1DSrHmaE-RhUJYOmg6RtNDtnkVDG8pKrIjSblqs_9RBdjpfxUhyzREVzHPonO309WQPsSXSVe3ICPCE1-Mv2z-m0nVoQakTMmnTcbnSWKg&entry=mc&ved=1t:200715&ictx=111"
                target="_blank"
                rel="noreferrer"
              >
                Endereço: Rua Piauí, 181 – Higienópolis – São Paulo – SP – CEP: 01241-001
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
                href="tel:1121148342"
                target="_blank"
                rel="noreferrer"
              >
                (11) 2114-8342
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
              src="/img/saudeMental/mackenzie/img1.jpg"
              alt="informrções"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/mackenzie/img2.jpg"
              alt="mudanças"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/mackenzie/img3.jpg"
              alt="atendimento"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <img
              src="/img/saudeMental/mackenzie/img4.jpg"
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
    backgroundImage: "url(/img/saudeMental/mackenzie/imgbackground.jpg)", // Certifique-se de que a extensão do arquivo está correta
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
    backgroundImage: "url(/img/saudeMental/mackenzie/imglogo.jpg)",
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

export default Servicos05;
