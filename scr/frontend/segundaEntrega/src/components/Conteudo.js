import React from 'react';
import styled from 'styled-components';
// import Header from '../components/Header';

const Container = styled.div`
  background-color: #000000; /* Cor de fundo clara */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: #808080;
  position: relative;
  width: 30%; /* Define a largura do box como 100% do container */
  height: auto; /* Permite que a altura se ajuste automaticamente à imagem */
  display: flex; /* Transforma o box em um container flexbox */
  flex-direction: column; /* Organiza os itens em uma coluna */
  justify-content: center; /* Centraliza os itens verticalmente */
  align-items: center; /* Centraliza os itens horizontalmente */
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Permite espaço entre os itens
  align-items: flex-start; // Alinha os itens à esquerda
`;

const Image = styled.img`
  position: absolute;
  top: 5px; /* Ajusta a posição vertical da imagem */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%);
  width: 30%;
  height: auto;
  z-index: 1; /* Garante que a imagem fique acima do texto */
`;

const Text = styled.p`
   font-size: 16px;
   text-align: center; /* Centraliza o texto horizontalmente */
   color: #FFFFFF; /* Define a cor do texto */
`;


const Sangue  = styled.a`
color: #9B0202;
`
const url = 'https://placehold.co/414x248'


const Nome = styled.h1`
color: #FFFFFF;
text-align: right;
`

function App() {
  return (

    <Container>
      <Image src={url} alt="minha imagem"></Image>
      <Box>
      <Nome>SINPESP</Nome>
        <Text>
          O valor mínimo de cada sessão fica em uma média de R$ 40, que é fixado a partir da
          condição financeira do paciente. Atendimento psicológico a todas as classes
          sociais para adultos, jovens, crianças, adolescentes, famílias e terceira idade.
        </Text>
        <Sangue href="#" className="link">Veja mais</Sangue>
      </Box>
    </Container>
  )
}

export default App;