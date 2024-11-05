import React, { useState } from 'react';
import styled from 'styled-components';

const FormPage = styled.div`
  background-color: #000;
  min-height: 100vh; 
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  padding: 0 5%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 45%; /* Ajusta o tamanho da área da esquerda */
`;

const LogoContainer = styled.div`
  margin-top: 5px;
`;

const LogoImage = styled.img`
  width: 450px; /* Tamanho do logo */
  height: auto;
  margin-left: 5px; /* Ajusta o espaçamento do logo */
  margin-bottom: 5px; /* Ajusta o espaçamento do logo */
`;

const TextContainer = styled.div`
  color: #fff;
  font-size: 45px; 
  font-weight: bolder;
  margin-bottom: 30px; /* Reduzindo o margin-bottom */
  margin-top: 10px; /* Reduzindo o margin-top */
`;

const TextoContainer = styled.div`
  color: #9B0202;
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 10px; /* Reduzindo o margin-bottom */
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%; /* Ajusta o tamanho da área da direita */
  background-color: #000;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
`;

const Input = styled.input`
  background-color: #761212;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;

  &::placeholder {
    color: #B78F8F;
  }
`;

const Textarea = styled.textarea`
  background-color: #761212;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  resize: none;
  height: calc(4 * 24px);

  &::placeholder {
    color: #B78F8F;
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: #9F1818;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin-top: 30px; /* Aumenta o espaçamento entre o checkbox e o botão */
  
  &:hover {
    background-color: #7f1414;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ checked }) => (checked ? '#761212' : 'transparent')};
  border: 2px solid #761212;
  margin-right: 10px;
  transition: all 150ms;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Labela = styled.label`
  color: white;
  font-family: 'Inter', sans-serif;
`;

function CustomCheckbox({ isChecked, handleCheckboxChange }) {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={isChecked} onClick={handleCheckboxChange} />
      <Labela>Concordo com esse site armazenar minha mensagem para posterior resposta.</Labela>
    </CheckboxContainer>
  );
}

function CadastroForm() {
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Você precisa concordar com os termos antes de enviar a mensagem!');
      return;
    }

    setMessage('Mensagem enviada com sucesso!');
    e.target.reset();
  };

  return (
    <FormPage>
      <LeftContainer>
        <TextoContainer>
          ENTRE EM CONTATO!
        </TextoContainer>
        <TextContainer>
          Sugestões, dúvidas, suporte, <br /> bate-papo
        </TextContainer>
        <LogoContainer>
          <LogoImage src="img/home/AbraceSP.png" alt="Abrace SP Logo" />
        </LogoContainer>
      </LeftContainer>

      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="nomeOng">Nome</Label>
        <Input id="nomeOng" type="text" placeholder="Nome e sobrenome" required />

        <Label htmlFor="email">Endereço de e-mail</Label>
        <Input id="email" type="email" placeholder="email@website.com.br" required />

        <Label htmlFor="telefone">Telefone para contato</Label>
        <Input id="telefone" type="tel" placeholder="(00) 00000 - 0000" required />

        <Label htmlFor="Mensagem">Mensagem</Label>
        <Textarea id="Mensagem" placeholder="Digite sua mensagem" required />

        <CustomCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

        <SubmitButton type="submit">ENVIAR</SubmitButton>
      </FormContainer>
    </FormPage>
  );
}

export default CadastroForm;