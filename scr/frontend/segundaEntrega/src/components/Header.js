import React, { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
.header {
    background-color: #000000;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logoHome {
    width: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
  }
  
  .abrace {
    color: #fff;
    /* Cor branca */
  }
  
  .sp {
    color: #9B0202;
    /* Cor vermelha */
  }
  
  .itensMenu {
    flex: 2;
  }
  
  .itensMenu ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    align-items: center;
  }
  
  .itensMenu ul li {
    position: relative;
    margin: 0;
  }
  
  .itensMenu ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    transition: transform 0.3s ease; 
    display: inline-block; /* Permite que o transform funcione */
  }
  
  .itensMenu ul li a:hover {
    transform: scale(1.2); /* Zoom de 1.2 */
    color: #9B0202;
    font-weight: bold;
  }
  
  .dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .dropdownMenu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #000000;
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    border-radius: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }
  
  .dropdownMenu li {
    display: block;
    padding: 10px 0px;
  }
  
  .dropdownMenu li a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
  }
  
  .botaoCadastro {
    display: flex;
    align-items: center;
  }
  
  .botaoCadastro button {
    padding: 10px 20px;
    font-size: 24px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border: none;
    background-color: #9B0202;
    color: #fff;
    cursor: pointer;
    border-radius: 12px;
    transition: transform 0.3s ease; 
  }
  
  .botaoCadastro button:hover {
    background-color: #6d0b0b;
    transform: scale(1.2); /* Zoom de 1.2 */
  }
`

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseOver = () => setDropdownVisible(true);
  const handleMouseOut = () => setDropdownVisible(false);

  return (

    <HeaderContainer>

      <header className="header">
        <div className="logoHome">
          <span className="abrace">ABRACE</span>
          <span className="sp">SP</span>
        </div>
        <div className="itensMenu">
          <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/acolhimento">Acolhimento</Link></li>
            <li><Link to="/alimentacao">Alimentação</Link></li>
            <li><Link to="/educacao">Educação</Link></li>
            <li><Link to="/saude-mental">Saúde Mental</Link></li>
            <li
              className="dropdown"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href="#"> Mais &#9662;</a>
              {dropdownVisible && (
                <ul className="dropdownMenu">
                  <li><Link to="/mais-servicos">Mais Serviços</Link></li>
                  <li><Link to="/sobre-nos">Sobre Nós</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="botaoCadastro">
          <Link to="/cadastro">
            <button>CADASTRO</button>
          </Link>
        </div>
      </header>

    </HeaderContainer>
  )
}

export default Header;