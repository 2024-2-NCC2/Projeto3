import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const FooterContainer = styled.footer`
  background-color: #000000; /* Adicione esta linha para definir a cor de fundo */

  .footer {
    background-color: #00000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 3px solid #9b0202;
  }

  .logoHome {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-bottom: 20px; /* Espaçamento entre o logo e o menu */
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9b0202;
  }

  .itensMenu {
    width: 65%;
  }

  .itensMenu ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%; /* Garante que o menu ocupe toda a tela */
  }

  .itensMenu ul li {
    margin: 0; /* Remove margens adicionais para evitar que quebre a linha */
  }

  .itensMenu ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    padding: 10px 10px;
    transition: transform 0.3s ease;
    display: inline-block; /* Permite que o transform funcione */
  }

  .itensMenu ul li a:hover {
    color: #9b0202;
    transform: scale(1.2); /* Zoom de 1.2 */
  }

  .copyright {
    margin-top: 20px;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
  }

  .copyright .sp {
    color: #9b0202;
  }
`;

const StyledButton = styled.button`
  padding: 20px 20px;
  font-size: 1.3rem;
  background-color: #000;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-right: 75px;
  font-family: "Inter", sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #fff; 
    color: #000;
    border: 2px solid grey;
    transform: scale(1.09);
  }
`;

function Footer() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleContactClick = () => {
    navigate('/'); // Navega para a Home primeiro

    // Aguardar para garantir que a navegação foi concluída, então rolar até o contato
    setTimeout(() => {
      document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, [])

  return (
    <FooterContainer>
      {location.pathname !== "/" && ( // Condicionalmente renderiza as divs se não estiver na rota '/'
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "10px",
            marginBottom: "10px",
            borderTop: "3px solid #9b0202",
            padding: "20px",
          }}
        >
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <h2
              style={{
                color: "#9B0202",
                fontSize: "15px",
                fontWeight: "bolder",
                marginBottom: "20px",
              }}
            >
              VAMOS CONVERSAR!
            </h2>
            <p
              style={{ fontSize: "30px", color: "#FFF", fontWeight: "bolder" }}
            >
              Dê suas opiniões, sugestões, tire dúvidas!
            </p>
          </div>
          <StyledButton onClick={handleContactClick}>
            ENTRE EM CONTATO!
          </StyledButton>
        </div>
      )}

      <footer className="footer">
        <div className="logoHome">
          <span className="abrace">ABRACE</span>
          <span className="sp">SP</span>
        </div>
        <div className="itensMenu">
          <ul id="menu">
            <li>
              <Link to="/acolhimento">Acolhimento</Link>
            </li>
            <li>
              <Link to="/alimentacao">Alimentação</Link>
            </li>
            <li>
              <Link to="/educacao">Educação</Link>
            </li>
            <li>
              <Link to="/saude-mental">Saúde Mental</Link>
            </li>
            <li>
              <Link to="/mais-servicos">Mais Serviços</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/cadastro"> Cadastro</Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © 2024 - 2024 ABRACE<span className="sp">SP</span>
        </div>
      </footer>
    </FooterContainer>
  );
}

export default Footer;