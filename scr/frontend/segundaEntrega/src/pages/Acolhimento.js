import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeServicos = styled.div` /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url('img/acolhimento/logoAcolhimento.jpg');
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

function Acolhimento() {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/'); // Navega para a Home primeiro

    // Aguardar para garantir que a navegação foi concluída, então rolar até o contato
    setTimeout(() => {
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div>
      <Header />

      <HomeServicos> {/* Importação home abaixo do header */}
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Casas de</span>
              <span className="sp"> acolhimento </span>
            </h1>
            <h2>Para momentos em que um lugar para receber acolhimento é essencial!</h2>

          </div>
        </div>
      </HomeServicos>


      <Cards>
        <div className="cards-container">

          <h2 className='subtituloCards'>
            ACOLHIMENTO
          </h2>

          <h1 className='tituloCards'>
            Veja os espaços <span className="sp"> disponíveis! </span>
          </h1>

          <p className='text '>
            Locais seguros para buscar abrigo em inúmeras situações! Ambientes acolhedores para mulheres, crianças, público LGBT+ e muito mais!
          </p>

          {/* Primeira linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/acolhimento/casa1.webp" alt="Imagem 1" className="card-image" />
              <h3 title="Casa 01" className="card-title">Casa 01 </h3>
              <p className="card-description">Um projeto de sociedade civil que tem como propósito a acolhida de jovens entre 18 e 25 anos que foram expulsos de casa pela família por suas orientações afetivas sexuais e identidade de gênero.</p>
              <Link className="card-link" to="/acolhimento/servicos25"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src='img/acolhimento/coletivo_arouchianos.jpg' alt="Imagem 2" className="card-image" />
              <h3 title="Coletivo Arouchianos" className="card-title">Coletivo Arouchianos</h3>
              <p className="card-description">Busca garantir a visibilidade e promover a cultura, arte, esporte, política e questões sociais da comunidade LGBTI+ na região do Largo do Arouche.</p>
              <Link className="card-link" to="/acolhimento/servicos26"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/acolhimento/dias.jpg" alt="Imagem 3" className="card-image" />
              <h3 title="Centro Social Santo Dias" className="card-title">Centro Social Santo Dias </h3>
              <p className="card-description">Organização de
                 Sociedade Civil sem fins econômicos, oferecendo programas e serviços de assistência e desenvolvimento social e de educação que beneficiam o desenvolvimento integral de crianças, adolescentes, jovens, adultos e idosos em situação de vulnerabilidade social.</p>
              <Link className="card-link" to="/acolhimento/servicos27"> Veja Mais! </Link>
            </div>
          </div>

          {/* Segunda linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/acolhimento/aconchegoLogo.png" alt="Imagem 4" className="card-image" />
              <h3 title="Casa do Aconchego" className="card-title">Casa do Aconchego</h3>
              <p className="card-description">Sua missão é apoiar famílias vulneráveis com crianças em tratamento de saúde, oferecendo um ambiente seguro e acolhedor.</p>
              <Link className="card-link" to="/acolhimento/casa-do-aconchego"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/acolhimento/casaIsabel.jpeg" alt="Imagem 5" className="card-image" />
              <h3 title="Organização Social de Saúde Casa de Isabel" className="card-title">Organização Social de Saúde Casa de Isabel</h3>
              <p className="card-description">Seus objetivos são defender os cidadãos vítimas de violência doméstica e familiar, bem como a situação de risco (pessoal e social), em especial a mulher, a criança, o adolescente, adulto, idosos e pessoas com deficiências.</p>
              <Link className="card-link" to="/acolhimento/servicos29"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/acolhimento/florescer.jpeg" alt="Imagem 6" className="card-image" />
              <h3 title="Casa Florescer" className="card-title">Casa Florescer</h3>
              <p className="card-description">Um centro de acolhida pioneiro no Brasil que acolhe e atende mulheres transexuais e travestis em situação de vulnerabilidade.</p>
              <Link className="card-link" to="/acolhimento/servicos30"> Veja Mais! </Link>
            </div>
          </div>

        </div>
      </Cards>
      <Footer />
    </div>
  )
}

export default Acolhimento
