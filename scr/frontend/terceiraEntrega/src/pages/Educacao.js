import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeServicos = styled.div`
  /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url("img/educacao/headEducacao.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: justify;
    align-items: center;
    padding: 20px;
  }

  .contentSuperior h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    transition: transform 0.3s ease;
  }

  .containerSuperior h1:hover {
    transform: scale(1.02);
  }

  .contentSuperior h2 {
    font-size: 25px;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: #fff;
  }

  .contentSuperior p {
    font-size: 16px;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    font-family: "Inter", sans-serif;
    color: #fff;
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9b0202;
  }
`;

const Cards = styled.div`
  background-color: #000;
  padding: 40px 20px;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Define 3 colunas para os cards */
    gap: 20px; /* Espaçamento entre os cards */
  }

  .card {
    background-color: #1f1e1e;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover {
    transform: translateY(-10px); /* Efeito de hover */
  }

  .card-image {
    width: 100%;
    height: 180px; /* Altura fixa para as imagens */
    object-fit: cover;
    border-radius: 8px;
  }

  .card-title {
    font-size: 1.8rem;
    margin: 20px 0 40px 0;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }

  .card-title:hover {
    color: #9b0202;
  }

  .card-description {
    font-size: 1.2rem;
    color: #fff;
    font-family: "Inter", sans-serif;
    margin-bottom: 40px;
    flex-grow: 1;
  }

  .card-link {
    color: #9b0202;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    transition: color 0.3s ease;
  }

  .card-link:hover {
    color: #fff;
  }

  .subtituloCards {
    color: #9b0202;
    margin-top: 5px;
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  .tituloCards {
    color: #fff;
    margin-top: 50px;
    margin-bottom: 30px;
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    text-align: left;
    font-weight: bold;
  }

  .text {
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 30px;
  }

  .tituloEducacao {
    color: #9b0202;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

function Educacao() {
  return (
    <div>
      <Header />

      <HomeServicos>
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Educ</span>
              <span className="sp">ação </span>
            </h1>
            <h2>
              Você encontrará cursos online, certificações, oficinas, workshops
              gratuitamente ou em promoção!
            </h2>
          </div>
        </div>
      </HomeServicos>

      <Cards>
        {/* Mantendo o título e o texto fora do cards-container */}
        <p className="tituloEducacao">EDUCAÇÃO</p>
        <h1 className="tituloCards">
          Cursos online <span className="sp">gratuitos!</span>
        </h1>
        <p className="text">
          Cursos gratuitos com certificações, de diversos temas! Aqui você
          encontrará os mais em alta.
        </p>

        <div className="cards-container">
          {/* Linha de cartões */}
          <div className="card">
            <img
              src="img/educacao/sebraeMiniatura.png"
              alt="Imagem 1"
              className="card-image"
            />
            <h3 className="card-title">Sebrae</h3>
            <p className="card-description">
              Uma das maiores plataformas de cursos online do Brasil, a Sebrae
              proporciona cursos de marketing, empreendedorismo e muito mais!
            </p>
            <Link className="card-link" to="/educacao/servicos13">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/educacao/fundacaoBradesco.png"
              alt="Imagem 2"
              className="card-image"
            />
            <h3 className="card-title">Fundação Bradesco</h3>
            <p className="card-description">
              Plataforma online de cursos que oferece centenas de conteúdos que
              oferecem certificações reconhecidas para o mercado de trabalho em
              geral.
            </p>
            <Link className="card-link" to="/educacao/servicos14">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/educacao/dio.png"
              alt="Imagem 3"
              className="card-image"
            />
            <h3 className="card-title">Digital Innovation One</h3>
            <p className="card-description">
              Cursos de tecnologia gratuitos e com certificações reconhecidas
              nacionalmente.
            </p>
            <Link className="card-link" to="/educacao/servicos15">
              Veja Mais!
            </Link>
          </div>
        </div>

        <h1 className="tituloCards">
          Oficinas em <span className="sp">São Paulo</span>
        </h1>
        <p className="text">
          No meio da agitação da capital, às vezes esquecemos que precisamos
          nos presentar com tempo de qualidade. Esse respiro da mente é
          importante para uma rotina saudável e feliz. Além de nos
          fazer enxergar os desafios com outros olhos e gerar motivação. Por
          isso, listamos algumas oficinas e workshops em SP para você que
          busca momentos de lazer que exercitem sua criatividade.
        </p>

        <div className="cards-container">
          {/* Linha de cartões */}
          <div className="card">
            <img
              src="img/educacao/florais.png"
              alt="Imagem 1.1"
              className="card-image"
            />
            <h3 className="card-title">Montagem de arranjos florais</h3>
            <p className="card-description">
              O ateliê paulistano Se Flor pra Ser realiza workshops esporádicos
              onde você aprende a montar seu próprio arranjo de flores! A
              experiência é acompanhada de bebidas, comidinhas e brindes.
            </p>
            <Link className="card-link" to="/educacao/servicos16">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/educacao/ceramica.png"
              alt="Imagem 2.2"
              className="card-image"
            />
            <h3 className="card-title">Cerâmica</h3>
            <p className="card-description">
              Se você sonha em criar lindas peças de cerâmica com suas próprias
              mãos, o Ateliê Beija-flor da alma é o lugar certo!<br></br>{" "}
              <br></br>
              As aulas recorrentes ocorrem uma vez por semana, com duração de 3
              horas.
            </p>
            <Link className="card-link" to="/educacao/servicos17">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/educacao/costura.png"
              alt="Imagem 3"
              className="card-image"
            />
            <h3 className="card-title">Corte e costura</h3>
            <p className="card-description">
              A Sigbol tem sete unidades de ensino em São Paulo onde
              oferta diversos cursos na área da moda. De costura
              criativa, customização a até mesmo personal stylist, você encontra
              várias opções por lá. Se você gosta de linha e agulha, é uma
              excelente alternativa para aprender a criar e customizar suas
              próprias peças!
            </p>
            <Link className="card-link" to="/educacao/servicos18">
              Veja Mais!
            </Link>
          </div>
        </div>
      </Cards>

      <Footer />
    </div>
  );
}

export default Educacao;