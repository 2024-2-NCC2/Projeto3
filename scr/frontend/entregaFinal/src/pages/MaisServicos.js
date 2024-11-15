import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HomeServicos = styled.div` /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url('img/maisServicos/capaMaisServicos.jpg');
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
  transform: scale(1.07);
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


function MaisServicos() {

  return (
    <div>
      <Header />

      <HomeServicos> {/* Importação home abaixo do header */}
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Mais</span>
              <span className="sp"> Serviços </span>
            </h1>
            <h2>Descubra mais serviços em nosso site e apoie diversas ONGs por meio de doações, voluntariado e eventos solidários.</h2>

          </div>
        </div>
      </HomeServicos>


      <Cards>
        <div className="cards-container">

          <h2 title="O Melhos Site ddo Mundo " className='subtituloCards'>
            MAIS SERVIÇOS
          </h2>

          <h1 className='tituloCards'>
            Encontre diversos <span className="sp"> espaços! </span>
          </h1>

          <p className='text '>
            Demais locais para quando você estiver precisando de ajuda!
          </p>

          {/* Primeira linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/maisServicos/carrapicho.jpg" alt="Imagem 1" className="card-image" />
              <h3 title="Associação Vida Carrapicho" className="card-title">Associação Vida Carrapicho </h3>
              <p className="card-description">A Associação Vida Carrapicho, é uma organização sem fins lucrativos,  com a iniciativa de um grupo de amigos que trabalhavam em um abrigo como educadores sociais. </p>
              <Link className="card-link" to="/mais-servicos/servicos07"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/maisServicos/caoSemDono.jpg" alt="Imagem 2" className="card-image" />
              <h3 title="Cão Sem Dono" className="card-title">Cão Sem Dono</h3>
              <p className="card-description">O Cão Sem Dono é uma ONG, sem fins lucrativos, e que nasceu de um grande sonho do seu atual presidente: tirar o maior número possível de animais das ruas, dar tratamento adequado e integrá-los a famílias que lhes deem amor, carinho e uma vida digna.</p>
              <Link className="card-link" to="/mais-servicos/servicos08"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/maisServicos/favelaPaz.png" alt="Imagem 3" className="card-image" />
              <h3 title="Instituto Favela da Paz" className="card-title">Instituto Favela da Paz</h3>
              <p className="card-description">O Instituto Favela da Paz é um guarda chuva que abriga diversas iniciativas e coletivos, desde alimentação saudável, arte, cultura, sustentabilidade, saúde e bem estar e educação.</p>
              <Link className="card-link" to="/mais-servicos/servicos09"> Veja Mais! </Link>
            </div>
          </div>

          {/* Segunda linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/maisServicos/adus.png" alt="Imagem 4" className="card-image" />
              <h3 title="Instituto Adus" className="card-title">Instituto Adus</h3>
              <p className="card-description">O Instituto Adus é uma ONG que promove a integração de refugiados na sociedade brasileira desde outubro de 2010. Que oferece ao refugiado todo o suporte para conseguir documentação, capacitação, intermediação junto a empresas e ensino de português.</p>
              <Link className="card-link" to="/mais-servicos/servicos10"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/maisServicos/graacc.jpg" alt="Imagem 5" className="card-image" />
              <h3 title="GRAACC" className="card-title">GRAACC</h3>
              <p className="card-description">O hospital do GRAACC realiza mensalmente cerca de 2.500 atendimentos, entre sessões de quimioterapia, consultas, procedimentos ambulatoriais, cirurgias, transplantes de medula óssea e outros. Além de diagnosticar e tratar o câncer infantil, o GRAACC atua no desenvolvimento do ensino e pesquisa.</p>
              <Link className="card-link" to="/mais-servicos/servicos11"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/maisServicos/abrinq.jpg" alt="Imagem 6" className="card-image" />
              <h3 title="Fundação ABRINQ" className="card-title">Fundação ABRINQ</h3>
              <p className="card-description">A Fundação Abrinq, é uma fundação de direito privado, sem fins lucrativos, constituída em 13 de fevereiro de 1990 com o objetivo de mobilizar a sociedade para questões relacionadas aos direitos da infância e da adolescência</p>
              <Link className="card-link" to="/mais-servicos/servicos12"> Veja Mais! </Link>
            </div>
          </div>

        </div>
      </Cards>
      <Footer />
    </div>
  )
}

export default MaisServicos