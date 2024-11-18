import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

const CepButton = styled.button`
  padding: 5px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  color: #9f1818;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;

const FormPage = styled.div`
  background: linear-gradient(
    155deg,
    #111010,
    #5a0f0f
  ); // Degradê de preto para vermelho mais escuro
  min-height: 130vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 10px;
  margin-right: 5%;
`;
const FormTitle = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 6px 6c 8px #9f1818; /* Sombra branca */
`;
const FormDescription = styled.p`
  text-align: Left;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 6px 6c 8px #9f1818; /* Sombra branca */
`;
const Label = styled.label`
  color: #fff;
  margin-bottom: 10px;
  font-family: "Inter", sans-serif;
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
    color: #b78f8f;
  }
`;
const Textarea = styled.textarea`
  background-color: #761212;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  resize: none; // Desabilita o redimensionamento
  height: calc(4 * 24px); // Define a altura da área de texto

  &::placeholder {
    color: #b78f8f;
  }
`;
const Select = styled.select`
  background-color: #761212;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #b78f8f;
  appearance: none; /* Remove o estilo padrão do sistema operacional */
  -webkit-appearance: none; /* Remove o estilo padrão no Safari */
  -moz-appearance: none; /* Remove o estilo padrão no Firefox */
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23b78f8f" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); /* Adiciona um ícone de seta personalizado */
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;

  option {
    // Estiliza as opções dentro do seletor
    background-color: #b78f8f;
    color: #fff;
  }
`;
const FileInputContainer = styled.div`
  background-color: #761212;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  color: #b78f8f;
  font-size: 16px;
`;
const FileInput = styled.input`
  margin-top: 5px;
  color: #b78f8f;
`;
const SubmitButton = styled.button`
  padding: 10px;
  background-color: #9f1818;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #7f1414;
  }
`;
const Dropdown = styled.div`
  background-color: #28a745;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: ${({ isVisible }) => (isVisible ? "100px" : "0")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  overflow: hidden;
`;

function Cadastro() {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Definir os estados dos campos do formulário
  const [nomeOng, setNomeOng] = useState("");
  const [telefoneOng, setTelefoneOng] = useState("");
  const [emailOng, setEmailOng] = useState("");
  const [linkSite, setLinkSite] = useState("");
  const [linkRedesSociais, setLinkRedesSociais] = useState("");
  const [logoOng, setLogoOng] = useState(null);
  const [fotosCarrosel, setFotosCarrosel] = useState(null);

  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");

  const [descricao, setDescricao] = useState("");
  const [modeloOng, setModeloOng] = useState("");
  const [causa, setCausa] = useState("");

  const { reset } = useForm();

  // Crie referências para os campos de arquivo
  const logoOngRef = useRef(null);
  const fotosCarroselRef = useRef(null);

  const handleTelefoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedPhone = input.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    setTelefoneOng(formattedPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Concatena os campos de endereço
    const enderecoOng = `${endereco}, ${numero}, ${bairro}, ${cidade}, ${cep}`;

    const formData = new FormData();
    formData.append("nomeOng", nomeOng);
    formData.append("telefoneOng", telefoneOng);
    formData.append("emailOng", emailOng);
    formData.append("linkSite", linkSite);
    formData.append("linkRedesSociais", linkRedesSociais);
    formData.append("enderecoOng", enderecoOng);
    formData.append("descricao", descricao);
    formData.append("modeloOng", modeloOng);
    formData.append("causa", causa);

    // Adicione o caminho completo do logoOng ao FormData
    if (logoOng) {
      formData.append("logoOng", logoOng);
    }

    // Adicione os arquivos do carrossel ao FormData
    if (fotosCarrosel) {
      Array.from(fotosCarrosel).forEach((file) => {
        formData.append("fotosCarrosel", file);
      });
    }

    try {
      const response = await axios.post(
        "https://abracesp.azurewebsites.net/cadastro",
        formData
      );

      if (response.status === 200) {
        console.log("Cadastro realizado com sucesso:");
        reset();
        resetForm();
        setMessage("Cadastro realizado com sucesso");
        setIsVisible(true);
        alert("Cadastro realizado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao cadastrar: ", error);
      alert("Erro ao realizar o cadastro.");
    }
  };

  const resetForm = () => {
    setNomeOng("");
    setTelefoneOng("");
    setEmailOng("");
    setLinkSite("");
    setLinkRedesSociais("");
    setLogoOng(null);
    setFotosCarrosel(null);
    setEndereco("");
    setNumero("");
    setBairro("");
    setCidade("");
    setCep("");
    setDescricao("");
    setModeloOng("");
    setCausa("");
    reset(); // Reseta o formulário usando react-hook-form

    // Redefine os campos de arquivo
    if (logoOngRef.current) {
      logoOngRef.current.value = "";
    }
    if (fotosCarroselRef.current) {
      fotosCarroselRef.current.value = "";
    }
  };

  // Atualize os manipuladores de mudança para os campos de arquivo
  const handleLogoChange = (e) => {
    setLogoOng(e.target.files[0]);
  };

  const handleFotosCarroselChange = (e) => {
    setFotosCarrosel(e.target.files);
  };

  const handleModeloOngChange = (e) => {
    setModeloOng(e.target.value);
  };

  const handleCausaChange = (e) => {
    setCausa(e.target.value);
  };

  const checkCep = () => {
    const formattedCep = cep.replace(/\D/g, "");
    console.log(formattedCep);
    fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        setEndereco(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
      });
  };
  

  return (
    <div>
      <Header />
      <FormPage>
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Cadastro de Serviço</FormTitle>
          <FormDescription>
            Realize o cadastro de seu Estabelecimento/Instituição e ajude a fortalecer o nosso projeto!
            <br></br>
            <br></br>
            Lembrando que apenas aceitamos cadastros na cidade de São Paulo. 

          </FormDescription>
          <Label htmlFor="causas">Causas</Label>
          <Select
            id="causas"
            value={causa}
            onChange={handleCausaChange}
            required
          >
            <option value="" disabled selected>
              Selecione a sua causa
            </option>
            <option value="alimentacao">Alimentação</option>
            <option value="acolhimento">Acolhimento</option>
            <option value="educacao">Educação</option>
            <option value="saudeMental">Saúde Mental</option>
            <option value="outros">Outros</option>
          </Select>
          <Label htmlFor="modalidade">Tipo de Serviço</Label>
          <Select
            id="modalidade"
            value={modeloOng}
            onChange={handleModeloOngChange}
            required
          >
            <option value="" disabled selected>
              Selecione o tipo de serviço
            </option>
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
            <option value="hibrido">Híbrido</option>
          </Select>
          {/* Campos de Endereço visíveis apenas se o serviço não for Online */}
          {modeloOng !== "online" && ( // Condicional para exibir campos adicionais
            <>
              <Label htmlFor="cep">CEP</Label>
              <Input
                id="cep"
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o seu CEP"
                maxLength="9"
                title="CEP deve ter no máximo 9 caracteres."
                pattern="^[0-9]{5}-?[0-9]{3}$"
              />
              <CepButton type="button" onClick={checkCep}>
                Buscar CEP
              </CepButton>

              <Label htmlFor="endereco">Endereço</Label>
              <Input
                id="endereco"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Logradouro"
                maxLength="300"
                title="Logradouro deve ter no máximo 300 caracteres."
              />

              <Label htmlFor="numeroEndereco">Número</Label>
              <Input
                id="numeroEndereco"
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Número do seu endereço..."
                maxLength="50"
                title="Numero deve ter no máximo 50 caracteres."
              />

              <Label htmlFor="bairroEndereco">Bairro</Label>
              <Input
                id="bairroEndereco"
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
                maxLength="100"
                title="Bairro deve ter no máximo 100 caracteres."
              />

              <Label htmlFor="cidadeEndereco">Cidade</Label>
              <Input
                id="cidadeEndereco"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
                maxLength="100"
                title="Cidade deve ter no máximo 100 caracteres."
              />
            </>
          )}
          <Label htmlFor="nomeOng">Nome da ONG</Label>
          <Input
            id="nomeOng"
            type="text"
            value={nomeOng}
            onChange={(e) => setNomeOng(e.target.value)}
            placeholder="Nome da Instituição..."
            required
            maxLength="100"
            title="Nome da instituição deve ter no máximo 100 caracteres."
          />
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            type="tel"
            value={telefoneOng}
            onChange={handleTelefoneChange}
            placeholder="Insira seu telefone: (XX)XXXXX-XXXX..."
            required
            maxLength="15"
            title="Telefone deve estar no formato (XX)XXXXX-XXXX."
          />
          <Label htmlFor="email">Endereço de e-mail</Label>
          <Input
            id="email"
            type="email"
            value={emailOng}
            onChange={(e) => setEmailOng(e.target.value)}
            placeholder="E-mail..."
            required
            maxLength="150"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Por favor, insira um e-mail válido."
          />
          <Label htmlFor="site">Site</Label>
          <Input
            id="site"
            type="text"
            value={linkSite}
            onChange={(e) => setLinkSite(e.target.value)}
            placeholder="www.seusite.com.br"
            required
            maxLength="300"
          />
          <Label htmlFor="redeSocial">Redes sociais</Label>
          <Input
            id="redeSocial"
            type="text"
            value={linkRedesSociais}
            onChange={(e) => setLinkRedesSociais(e.target.value)}
            placeholder="@suaredesocial..."
            required
            maxLength="100"
            title="Redes sociais deve ter no máximo 100 caracteres."
          />
          <Label htmlFor="servicos">Descrição dos Serviços</Label>
          <Textarea
            id="servicos"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite aqui a descrição do(s) serviço(s)..."
            required
            maxLength="500"
            title="A descrição deve ter no máximo 500 caracteres."
          />
          <FileInputContainer>
            <Label htmlFor="logo">Logo da Instituição:</Label>
            <FileInput
              type="file"
              id="logo"
              accept="image/*"
              onChange={handleLogoChange}
              ref={logoOngRef}
              required
            />
          </FileInputContainer>
          <FileInputContainer>
            <Label htmlFor="imagem">Fotos para Carrossel de Imagens:</Label>
            <FileInput
              type="file"
              id="imagem"
              accept="image/*"
              multiple
              onChange={handleFotosCarroselChange}
              ref={fotosCarroselRef}
              required
            />
          </FileInputContainer>
          <SubmitButton type="submit">CADASTRAR</SubmitButton>
          <Dropdown isVisible={isVisible}>{message}</Dropdown>{" "}
          {/* Exibe a mensagem de sucesso */}
        </FormContainer>
      </FormPage>
      <Footer />
    </div>
  );
}

export default Cadastro;