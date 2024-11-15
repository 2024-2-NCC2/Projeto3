import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormPage = styled.div`
  background-color: #000;
  min-height: 100vh; 
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  padding: 0 5%;
  margin-top: -100px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 45%; /* Ajusta o tamanho da área da esquerda */
`;

const LogoContainer = styled.div`
  margin-top: -14px;
`;

const LogoImage = styled.img`
  width: 450px; /* Tamanho do logo */
  height: auto;
  margin-top: 40px;
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

const SuccessMessage = styled.div`
  color: #28a745;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  text-align: center;
`;

function CadastroForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarEmail(e){
    e.preventDefault();

    if(nome === '' || email === '' || telefone === '' || mensagem === ''){
      alert("Preencha todos os campos")
      return;
    }

    const templateParams = {
      to_name: nome,
      from_name: email,
      telephone: telefone,
      message: mensagem
    }

    emailjs.send('service_7sxifil', 'template_73pj93k', templateParams, '-ca-HQtKddqy1XmvR')
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setNome('')
      setEmail('')
      setTelefone('')
      setMensagem('')
      setIsChecked(false)
      setSuccessMessage('Mensagem enviada com sucesso!');
      setTimeout(() => setSuccessMessage(''), 5000); // Hide message after 5 seconds
    }, (err) => {
      console.log("ERRO: ", err)
    })
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedPhone = input.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    setTelefone(formattedPhone);
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

      <FormContainer className='form' onSubmit={enviarEmail}>
        <Label htmlFor="nomeOng">Nome</Label>
        <Input
          className='input'
          type="text"
          placeholder="Digite seu nome e sobrenome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
          maxLength={50}
        />

        <Label htmlFor="email">Endereço de e-mail</Label>
        <Input
          className='input'
          type="email"
          placeholder="email@website.com.br"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          maxLength={100}
        />

        <Label htmlFor="telefone">Telefone para contato</Label>
        <Input
          className='input'
          type="tel"
          placeholder="(00)00000-0000"
          onChange={handlePhoneChange}
          value={telefone}
          maxLength={11} // Define um limite de numeros no campo de telefone
        />

        <Label htmlFor="Mensagem">Mensagem</Label>
        <Textarea
          className='input'
          placeholder="Digite sua mensagem em até 500 caracteres"
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          maxLength={500} // Define um limite de caracteres no campo Mensagem
        />

        <label style={{
          color: "white",
        }}>
          <input style={{
            transform:"scale(1.3)",
            marginRight:"10px",
            color:"red"
          }}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Concordo com esse site armazenar minha mensagem para posterior resposta
        </label>

        <SubmitButton type="submit">ENVIAR</SubmitButton>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </FormContainer>
    </FormPage>
  );
}

export default CadastroForm;