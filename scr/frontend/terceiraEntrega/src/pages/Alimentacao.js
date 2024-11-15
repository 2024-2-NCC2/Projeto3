import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HomeServicos = styled.div` /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url('img/alimentacao/capaAliment.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: justify;
    align-items: center;
    padding: 20px;
  }

  .contentSuperior {
    font-weight: bold;
  }

  .contentSuperior h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 50px;
    transition: transform 0.3s ease;
  }

  .containerSuperior h1:hover{
    transform: scale(1.02);
  }
  .contentSuperior h2 {
    font-size: 25px;
    margin-bottom: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;  
    color: #FFF;
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9B0202;
  }
`

const Cards = styled.div`

background-color: #000;

.cards-container {
  display: flex;
  flex-direction: column; /* Organiza as linhas de cartões verticalmente */
  gap: 10px; /* Espaço entre as linhas */
  padding: 20px;
}

.row {
  display: flex;
  justify-content: space-between; /* Espaça igualmente os cartões dentro da linha */
}

.card {
  background-color: #1F1E1E;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%; /* Largura de cada cartão */
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
  text-align: justify;
}

.card:hover {
  transform: translateY(-10px); /* Efeito de hover */
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.card-title {
  font-size: 1.5rem;
  margin: 10px 0;
  color: #fff;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
}

.card-title:hover {
  color: #9B0202;
}

.card-description {
  font-size: 20px;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.card-link {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  color: #9B0202;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  transition: transform 0.3s ease; 
  font-family: 'Inter', sans-serif;
}

.card-link:hover {
  color: #fff;
  transform: scale(1.07); /* Zoom de 1.2 */
}

.subtituloCards{
  color: #9B0202;
  margin-top: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.tituloCards{
  color: #fff;
  margin-top: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 48px;
}
.text{
  color: #fff;
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;

}
.sp{
  color: #9B0202;
  /* <span className="sp"</span> */
}

  `

function Alimentacao() {

  return (
    <div>
      <Header />

      <HomeServicos> {/* Importação home abaixo do header */}
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Aliment</span>
              <span className="sp">ação </span>
            </h1>
            <h2>Em parceria com restaurantes populares, ONG's e projetos sociais ajudamos a combater a fome </h2>

          </div>
        </div>
      </HomeServicos>


      <Cards>
        <div className="cards-container">

          <h2 title="O Melhos Site ddo Mundo " className='subtituloCards'>
            ALIMENTAÇÃO
          </h2>

          <h1 className='tituloCards'>
            Encontre diversos <span className="sp"> espaços! </span>
          </h1>

          <p className='text '>
            Quando a fome bater, já sabe onde ir!
          </p>

          {/* Primeira linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/alimentacao/capaBom.jpg" alt="Imagem 1" className="card-image" />
              <h3 title="Bom-Prato" className="card-title">Bom-Prato</h3>
              <p className="card-description">Criado em 28 de dezembro de 2.000, o programa Bom Prato tem como objetivo oferecer refeições saudáveis e de alta qualidade a um custo acessível à população em vulnerabilidade social.  </p>
              <Link className="card-link" to="/alimentacao/servicos19"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src='img/alimentacao/capabanco.jpg' alt="Imagem 2" className="card-image" />
              <h3 title="Banco de Alimentos" className="card-title">Banco de Alimentos</h3>
              <p className="card-description">Fundada em 1998, a ONG Banco de Alimentos é uma associação civil que recolhe alimentos que já perderam valor de prateleira no comércio e indústria, mas ainda estão aptos para consumo, e os distribui onde são mais necessários.</p>
              <Link className="card-link" to="/alimentacao/servicos20"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/alimentacao/capaPao.png" alt="Imagem 3" className="card-image" />
              <h3 title="Pão do Povo da Rua" className="card-title">Pão do Povo da Rua </h3>
              <p className="card-description">O projeto Pão do Povo da Rua existe desde 2020 e alimenta diariamente 1.200 pessoas em situação de rua, no Centro de São Paulo. </p>
              <Link className="card-link" to="/alimentacao/servicos21"> Veja Mais! </Link>
            </div>
          </div>

          {/* Segunda linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/alimentacao/capaTonk2.png" alt="Imagem 4" className="card-image" />
              <h3 title="Tonkiri" className="card-title">Tonkiri</h3>
              <p className="card-description">Tonkiri Voa é um projeto social de impacto, diante da situação de fome nas periferias de São Paulo. Tudo começou com a entrega de marmitas, em torno da qual uma rede de mais de cem amigas e amigos solidários se mobilizaram. </p>
              <Link className="card-link" to="/alimentacao/servicos22"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/alimentacao/capasesc.jpg" alt="Imagem 5" className="card-image" />
              <h3 title="Sesc Mesa Brasil" className="card-title">Sesc Mesa Brasil</h3>
              <p className="card-description">A maior rede privada de bancos de alimentos da América Latina combate a fome e o desperdício, a partir de doações de parceiros.</p>
              <Link className="card-link" to="/alimentacao/servicos23"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/alimentacao/capaOrg.jpg" alt="Imagem 6" className="card-image" />
              <h3 title="Orgânico Solidario" className="card-title">Orgânico Solidario</h3>
              <p className="card-description">O Orgânico Solidário é uma iniciativa comprometida em enfrentar os desafios da segurança alimentar e geração de renda sustentável.</p>
              <Link className="card-link" to="/alimentacao/servicos24"> Veja Mais! </Link>
            </div>
          </div>

        </div>
      </Cards>
      <Footer />
    </div>
  )
}

export default Alimentacao
