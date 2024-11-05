import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // Importação Header
import Footer from '../components/Footer'; // Importação Footer
import Contato from '../components/Contato'; // Importação Contato
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação Boot
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importação Boot

const HomeContent = styled.div` /* Design para conteúdos da home (abaixo do header) */
  .containerHome {
    width: 100%;
    min-height: 100vh;
    background-image: url('img/home/logoAbraceSP.jpg'); 
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .contentHome {
    font-weight: bold;
    text-align: center;
    color: #9B0202;
  }

  .contentHome h1 {
    font-size: 72px;
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
  }

  .contentHome h2 {
    font-size: 40px;
    margin-bottom: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;  
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9B0202;
  }
`

const HomeResumo = styled.div` /* Design para resumo do ABRACESP */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  color: #fff; 
  padding: 50px;
 
  .textResumo {
    max-width: 50%;
  }

  .suporteResumo {
    color: #9B0202;
    font-size: 16px;
    margin-bottom: 75px; /* Espaçamento entre os conteúdos */
    font-weight: bold;
  }

  .tituloResumo {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 75px;
  }

  .descricaoResumo {
    font-size: 24px;
    line-height: 1.6;
    margin-bottom: 50px;
  }

  .imgResumo {
    max-width: 50%;
    margin-right: 100px;
    margin-left: 70px;
    margin-top: 50px;
  }

  .styleImgResumo {
    width: 100%;
    height: auto;
  }

  .sp {
    color: #9B0202;
  }
`

const HomeServicos = styled.div` /* Design para resumo dos serviços (carrossel) */
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #000;
  color: #fff; 
  padding: 50px;
  font-family: 'Inter', sans-serif;
 
  #servicos {
    max-width: 50%;
  }

  .textEmpodere {
    color: #9B0202;
    font-size: 16px;
    margin-bottom: 50px;
    font-weight: bold; 
  }

  .tituloServicos {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 50px;
    font-family: 'Inter', sans-serif;
  }

  .descricaoServicos {
    font-size: 24px;
    line-height: 1.6;
    margin-bottom: 50px;
  }

  .sp {
    color: #9B0202;
  }
  `

const Carousel = styled.div` /* Design para o carrossel no resumo */
    .custom-carousel {
    width: 100%; 
    max-width: 1200px;  
    height: 650px;  
    margin: 0 auto; 
}

.custom-carousel img {
    width: 100%;  /* Faz com que as imagens ocupem toda a largura */
    height: 600px;  /* Faz com que as imagens ocupem toda a altura */
    object-fit: cover;  /* Mantém a proporção da imagem e preenche o contêiner */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 70px; /* Tamnho do ícone */
    height: 70px; 
}

.carousel-control-prev, 
.carousel-control-next {
    top: 50%;  /* Centraliza verticalmente */
    transform: translateY(-50%); /* Mantém o centro mesmo ao alterar o tamanho */
}

.custom-caption-center {
    position: absolute;
    top: 250px; 
    left: 0;
    width: 100%;
    height: 100%; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: top; 
    text-align: center;
    padding: 20px;
    color: #fff;
}

.custom-caption-center h2 {
    font-size: 45px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    margin: 0 0 10px 0;
    transition: text-shadow 0.3s ease, transform 0.3s ease; 
}

.custom-caption-center h2:hover {
      transform: scale(1.2); 
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); /* Sombra no hover */
}

.custom-caption-center p {
    font-size: 25px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 50px;
}

.custom-img-size {
  width: 800px;
  height: 400px;
  border-radius: 12px;
}

  `

const Button = styled.button` /* Design para os botões CADASTRO (fora do header) e DESCUBRA */
  padding: 15px 30px;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: #fff;
  background-color: #9B0202;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #6d0b0b;
    transform: scale(1.2);
  }
`

const HomeContato = styled.div`
  color: #fff;
  background-color: #000;
`

function Home() {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header /> {/*Importação do Header */}

      <HomeContent> {/* Importação home abaixo do header */}
        <div className="containerHome">
          <div className="contentHome">
            <h1>
              <span className="abrace">ABRACE</span>
              <span className="sp">SP</span>
            </h1>
            <h2>Um conjunto de serviços essenciais para você!</h2>
            <Button onClick={() => {
              const servicosSection = document.getElementById('servicos');
              servicosSection.scrollIntoView({ behavior: 'smooth' });
            }}>
              DESCUBRA
            </Button>

          </div>
        </div>
      </HomeContent>

      <HomeResumo> {/* Importação resumo do ABRACESP */}
        <div className="textResumo">
          <h2 className="suporteResumo">SUPORTE CENTRALIZADO!</h2>
          <h1 className="tituloResumo">
            Conectando os recursos de
            <span className="sp"> São Paulo</span>
          </h1>
          <p className="descricaoResumo">
            O abraceSP atua como um portal vital para serviços sociais em São Paulo, conectando indivíduos com recursos
            essenciais. Desde ONG's que oferecem abrigo e doações a serviços de alimentação e oportunidades de formação. Dessa forma,
            simplificamos o acesso ao apoio. As organizações podem registrar-se para apresentar as suas ofertas, garantindo
            que a comunidade esteja informada e capacitada. Junte-se a nós para fazer a diferença explorando a riqueza de
            serviços disponíveis em São Paulo!
          </p>
          <Link to="/cadastro">
            <Button className="botaoResumo">CADASTRO</Button>
          </Link>
        </div>
        <div className="imgResumo">
          <img
            src="img/home/sp02.jpg"
            alt="São Paulo city"
            className="styleImgResumo"
          />
        </div>
      </HomeResumo>

      <HomeServicos> {/* Importação do resumo dos serviços (carrossel) */}
        <div id="servicos">
          <h2 className="textEmpodere">EMPODERE NOSSA COMUNIDADE!</h2>
          <h1 className="tituloServicos">
            Se conecte com
            <span className="sp"> serviços sociais</span>
          </h1>
          <p className="descricaoServicos">
            Descubra ONG's, instituições públicas ou privadas e pessoas com serviços
            gratuitos ou com preços populares!
          </p>
        </div>

        {/* Importação do carrossel em Bootstrap */}
        <Carousel>
          <div id="carouselExampleIndicators" className="carousel slide custom-carousel" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner">
              <Link to="/alimentacao">
                <div className="carousel-item active">
                  <img src="img/home/food2.jpeg" className="d-block custom-img-size" alt="Imagem alimentação" />
                  <div className="carousel-caption custom-caption-center">
                    <h2>Aliment<span className="sp">ação</span></h2>
                    <p>Acesse variados espaços para se alimentar gratuitamente ou com valor simbólico</p>
                  </div>
                </div>
              </Link>

              <div className="carousel-item">
                <Link to="/acolhimento">
                  <img src="img/home/LgoDiversidade.jpg" className="d-block custom-img-size" alt="Imagem acolhimento" />
                  <div className="carousel-caption custom-caption-center">
                    <h2><span className="sp">Acolhi</span>mento</h2>
                    <p>Para momentos em que um lugar para receber acolhimento é essencial </p>
                  </div>
                </Link>
              </div>

              <div className="carousel-item">
                <Link to="/educacao">
                  <img src="img/home/educa.jpg" className="d-block custom-img-size" alt="Imagem educação" />
                  <div className="carousel-caption custom-caption-center">
                    <h2>Educ<span className="sp">ação</span></h2>
                    <p>Você encontrará aqui cursos online, certificações, oficinas, workshops gratuitamente ou em promoção</p>
                  </div>
                </Link>
              </div>

              <div className="carousel-item">
                <Link to="saude-mental">
                  <img src="img/home/saude.jpg" className="d-block custom-img-size" alt="Imagem saúde mental" />
                  <div className="carousel-caption custom-caption-center">
                    <h2>Saúde <span className="sp"> Mental</span></h2>
                    <p>Encontre serviços de psicologia, psiquiatria ou apenas um ombro amigo</p>
                  </div>
                </Link>
              </div>

              <div className="carousel-item">
                <Link to="mais-servicos">
                  <img src="img/home/maos.jpg" className="d-block custom-img-size" alt="Imagem mais serviços" />
                  <div className="carousel-caption custom-caption-center">
                    <h2>Mais <span className="sp"> Serviços</span></h2>
                    <p>Descubra mais serviços em nosso site e apoie diversas ONGs por meio de doações, voluntariado e eventos solidários</p>
                  </div>
                </Link>
              </div>
            </div>

            <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Carousel>

      </HomeServicos>

      <HomeContato> {/* Importação do contato */}
        <div ref={contactRef} id="contato">
          <Contato />
        </div>
      </HomeContato>

      <Footer /> {/* Importação do footer */}
    </div>
  );
}

export default Home;

