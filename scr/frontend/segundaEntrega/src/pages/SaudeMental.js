import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HomeServicos = styled.div` /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url('img/saudeMental/capaSaude.jpg');
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
  text-align: left;
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

function SaudeMental() {

  return (
    <div>
      <Header />

      <HomeServicos> {/* Importação home abaixo do header */}
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Saúde</span>
              <span className="sp"> Mental </span>
            </h1>
            <h2>Para sempre ter alguém para conversar! </h2>

          </div>
        </div>
      </HomeServicos>


      <Cards>
        <div className="cards-container">

          <h2 title="O Melhos Site ddo Mundo " className='subtituloCards'>
            SAÚDE MENTAL
          </h2>

          <h1 className='tituloCards'>
            Encontre diversos <span className="sp"> espaços! </span>
          </h1>

          <p className='text '>
            Locais para ajuda quando a vida estiver muito difícil e você precisar conversar com alguém!
          </p>

          {/* Primeira linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/saudeMental/paroquia.png" alt="Imagem 1" className="card-image" />
              <h3 title="Atendimento Psicológico Paróquia São Luís Gonzaga" className="card-title">Atendimento Psicológico Paróquia São Luís Gonzaga</h3>
              <p className="card-description">Um grupo de psicólogos voluntários ao qual atendem às quintas-feiras na Paróquia da Igreja São Luís Gonzaga, recebendo todos os tipos de pacientes </p>
              <Link className="card-link" to="/saude-mental/servicos01"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src='img/saudeMental/sinpesp.jpg' alt="Imagem 2" className="card-image" />
              <h3 title="SINPESP" className="card-title">SINPESP</h3>
              <p className="card-description">O valor mínimo de cada sessão é, em média, R$ 40, definido de acordo com a condição financeira do paciente. Atendem pessoas de todas as classes sociais, incluindo adultos, jovens, crianças, adolescentes, famílias e idosos.</p>
              <Link className="card-link" to="/saude-mental/servicos02"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/saudeMental/AnaMariaPopo.jpg" alt="Imagem 3" className="card-image" />
              <h3 title="Clínica  Ana Maria Popovic" className="card-title">Clínica  Ana Maria Popovic </h3>
              <p className="card-description">A Clínica Psicológica Ana Maria Poppovic oferece terapia para casais e famílias, crianças e adultos, além de tratar processos de luto, dificuldades nos relacionamentos, questões relacionadas ao trabalho, orientação vocacional/profissional e outros. O atendimento é online e gratuito. Antes de iniciar o tratamento, é necessário agendar por telefone.</p>
              <Link className="card-link" to="/saude-mental/servicos03"> Veja Mais! </Link>
            </div>
          </div>

          {/* Segunda linha de cartões */}
          <div className="row">
            <div className="card">
              <img src="img/saudeMental/ClinicaGuarulhos.jpg" alt="Imagem 4" className="card-image" />
              <h3 title="Clínica Psicológica da Universidade de Guarulhos" className="card-title">Clínica Psicológica da Universidade de Guarulhos</h3>
              <p className="card-description">Entre os serviços prestados estão psicodiagnóstico, psicoterapia infantil e para adultos, psicoterapia familiar e de casal. As inscrições devem ser feitas por telefone. As sessões, com duração de 50 minutos e ao custo de R$ 10 cada, são realizadas exclusivamente no formato presencial. </p>
              <Link className="card-link" to="/saude-mental/servicos04"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/saudeMental/PAN.avif" alt="Imagem 5" className="card-image" />
              <h3 title="PAN" className="card-title">PAN</h3>
              <p className="card-description">É um serviço especializado em São Paulo, voltado para o atendimento de idosos com necessidades neuropsiquiátricas. Oferece suporte e tratamento para condições como demência, depressão, ansiedade e outras questões de saúde mental que afetam a população idosa.</p>
              <Link className="card-link" to="/saude-mental/servicos05"> Veja Mais! </Link>
            </div>

            <div className="card">
              <img src="img/saudeMental/ABPS.jpeg" alt="Imagem 6" className="card-image" />
              <h3 title="ABPS" className="card-title">ABPS</h3>
              <p className="card-description">O centro de formação em psicodrama para psicólogos já graduados (com CRP) oferece atendimentos psicológicos online para adultos, adolescentes, crianças, casais e famílias. O valor é social, sendo o mínimo R$ 160 por quatro sessões, ou R$ 40 cada uma.</p>
              <Link className="card-link" to="/saude-mental/servicos06"> Veja Mais! </Link>
            </div>
          </div>

        </div>
      </Cards>
      <Footer />
    </div>
  )
}

export default SaudeMental
