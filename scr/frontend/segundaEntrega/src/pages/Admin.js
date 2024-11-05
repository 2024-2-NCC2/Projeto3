import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const HeaderContainer = styled.header`
  .header {
    background-color: #000000;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-left 0.3s;
    margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0")};
  }
  .logoHome {
    width: auto;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9b0202;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => (props.isOpen ? "20px" : "0")};
  overflow: hidden;
  transition: width 0.3s, padding 0.3s;
  z-index: 1000; // Certifique-se de que o menu lateral fique acima do conteúdo
`;

const Profile = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ecf0f1;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }
`;

const PageTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0")};
  transition: margin-left 0.3s;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 20px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoCircle = styled.img`
  width: 120px;
  height: 120px;
  background-color: #ecf0f1;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-top: 10px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
`;

const CardText = styled.p`
  margin: 5px 0;
`;

const ExpandButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #9b0202;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #9b0202;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: ${(props) => (props.isOpen ? "250px" : "20px")};
  padding: 10px;
  background-color: #9b0202;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: left 0.3s;
  z-index: 1100; // Certifique-se de que o botão fique acima do menu lateral
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; // Espaçamento entre os botões
  margin-top: 10px;
`;

const ApproveButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

function Admin() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    // Fetch cadastros from the server
    axios
      .get("http://localhost:3001/cadastros")
      .then((response) => {
        console.log("Dados recebidos do servidor:", response.data); // Adicione este log
        setCadastros(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar cadastros: ", error);
      });
  }, []);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleApprove = (index) => {
    // Lógica para aprovar o card
    console.log(`Card ${index + 1} aprovado`);
  };

  const handleDelete = (index) => {
    const cadastro = cadastros[index];
    axios
      .delete(`http://localhost:3001/cadastros/${cadastro.idUsuario}`)
      .then(() => {
        console.log(`Card ${index + 1} recusado`);
        setCadastros((prev) => prev.filter((_, i) => i !== index));
      })
      .catch((error) => {
        console.error("Erro ao deletar cadastro: ", error);
      });
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleString("pt-BR", options);
  };

  return (
    <>
      <HeaderContainer isSidebarOpen={isSidebarOpen}>
        <header className="header">
          <div className="logoHome">
            <span className="abrace">ABRACE</span>
            <span className="sp">SP</span>
          </div>
        </header>
      </HeaderContainer>

      <Container>
        <Sidebar isOpen={isSidebarOpen}>
          <Profile isOpen={isSidebarOpen}>
            <ProfilePic />
            <div>Admin Name</div>
          </Profile>
          <MenuItem onClick={() => setActiveTab("inicio")}>Início</MenuItem>
          <MenuItem onClick={() => setActiveTab("dashboard")}>
            Dashboard
          </MenuItem>
          <MenuItem onClick={() => setActiveTab("clientes")}>Clientes</MenuItem>
        </Sidebar>

        <Content isSidebarOpen={isSidebarOpen}>
          <ToggleButton
            isOpen={isSidebarOpen}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
          </ToggleButton>
          {activeTab === "inicio" && (
            <>
              <PageTitle>ONGs aguardando avaliação</PageTitle>
              <CardContainer>
                {cadastros.map((cadastro, index) => (
                  <Card key={index}>
                    <span className="badge text-bg-secondary">
                      {formatDate(cadastro.dataCadastro)}
                    </span>
                    <LogoCircle
                      src={`http://localhost:3001/${cadastro.logoOng}`}
                      alt="Logo"
                    />
                    <CardTitle>{cadastro.nomeOng}</CardTitle>
                    <CarouselContainer>
                      <Carousel interval={null}>
                        {JSON.parse(cadastro.fotosCarrosel).map((foto, idx) => (
                          <Carousel.Item key={idx}>
                            <CarouselImage
                              src={`http://localhost:3001/${foto}`}
                              alt={`Slide ${idx + 1}`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </CarouselContainer>
                    <CardText>{cadastro.causa}</CardText>
                    <CardText>{cadastro.descricao}</CardText>
                    {expandedCards[index] && (
                      <>
                        <CardText>Telefone: {cadastro.telefoneOng}</CardText>
                        <CardText>Email: {cadastro.emailOng}</CardText>
                        <CardText>Site: {cadastro.linkSite}</CardText>
                        <CardText>
                          Redes Sociais: {cadastro.linkRedesSociais}
                        </CardText>
                        <CardText>Endereço: {cadastro.enderecoOng}</CardText>
                        <CardText>Modelo: {cadastro.modeloOng}</CardText>
                        <ButtonContainer>
                          <ApproveButton onClick={() => handleApprove(index)}>
                            Aprovar
                          </ApproveButton>
                          <DeleteButton onClick={() => handleDelete(index)}>
                            Recusar
                          </DeleteButton>
                        </ButtonContainer>
                      </>
                    )}
                    <ExpandButton onClick={() => toggleExpand(index)}>
                      {expandedCards[index] ? "Colapsar" : "Expandir"}
                    </ExpandButton>
                  </Card>
                ))}
              </CardContainer>
            </>
          )}
          {activeTab === "dashboard" && <div>Dashboard Content</div>}
          {activeTab === "clientes" && <div>Clientes Content</div>}
        </Content>
      </Container>
    </>
  );
}

export default Admin;