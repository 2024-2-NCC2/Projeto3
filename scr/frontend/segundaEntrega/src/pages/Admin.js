import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Registre os componentes e escalas do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const HeaderContainer = styled.header`
  .header {
    background-color: #000000;
    padding: 20px;
    display: flex;
    justify-content: space-between; // Alterado de center para space-between
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
    margin: 0 auto; // Adicionado para centralizar
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9b0202;
  }

  .homeButton {
    background-color: #9b0202;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
      background-color: #7a0101;
    }
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
  background-image: url('/img/imagensAdmins/fecapPerfil.png');
  background-size: cover;
  background-position: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
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

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DashboardCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DashboardTitle = styled.h3`
  margin: 10px 0;
`;

const DashboardText = styled.p`
  margin: 5px 0;
`;

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ClientCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientTitle = styled.h3`
  margin: 10px 0;
`;

const ClientText = styled.p`
  margin: 5px 0;
`;

// Dados fictícios para os gráficos
const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Visitas',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Cadastros',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 55]
    }
  ]
};

const pieData = {
  labels: ['ONGs Ativas', 'ONGs Inativas'],
  datasets: [
    {
      label: 'ONGs',
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      data: [300, 50]
    }
  ]
};

function Admin() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});
  const [cadastros, setCadastros] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const [adminData, setAdminData] = useState({ nome: "", foto: "" });

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3001/admin', {
      headers: { Authorization: token }
    })
    .then(response => {
      setAdminData(response.data);
    })
    .catch(error => {
      console.error("Erro ao buscar dados do admin: ", error);
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

  const handleEdit = (index, cadastro) => {
    setEditIndex(index);
    setEditData(cadastro);
  };

  const handleSave = (index) => {
    axios
      .put(`http://localhost:3001/cadastros/${editData.idUsuario}`, editData)
      .then((response) => {
        setCadastros((prev) =>
          prev.map((cadastro, i) => (i === index ? editData : cadastro))
        );
        setEditIndex(null);
        setEditData({});
      })
      .catch((error) => {
        console.error("Erro ao atualizar cadastro: ", error);
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
          <button className="homeButton" onClick={() => window.location.href = "/"}>
            Home
          </button>
        </header>
      </HeaderContainer>

      <Container>
        <Sidebar isOpen={isSidebarOpen}>
          <Profile isOpen={isSidebarOpen}>
            <ProfilePic />
            <div>Perfil administrativo</div>
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
                    {editIndex === index ? (
                      <>
                        <label>
                          Nome da ONG:
                          <input
                            type="text"
                            value={editData.nomeOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nomeOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Causa:
                          <input
                            type="text"
                            value={editData.causa}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                causa: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Descrição:
                          <input
                            type="text"
                            value={editData.descricaoOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                descricaoOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Telefone:
                          <input
                            type="text"
                            value={editData.telefoneOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                telefoneOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Email:
                          <input
                            type="text"
                            value={editData.emailOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                emailOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Site:
                          <input
                            type="text"
                            value={editData.linkSite}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                linkSite: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Redes Sociais:
                          <input
                            type="text"
                            value={editData.linkRedesSociais}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                linkRedesSociais: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Endereço:
                          <input
                            type="text"
                            value={editData.enderecoOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                enderecoOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <label>
                          Modelo:
                          <input
                            type="text"
                            value={editData.modeloOng}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                modeloOng: e.target.value,
                              })
                            }
                          />
                        </label>
                        <ButtonContainer>
                          <ApproveButton onClick={() => handleSave(index)}>
                            Salvar
                          </ApproveButton>
                          <DeleteButton onClick={() => setEditIndex(null)}>
                            Cancelar
                          </DeleteButton>
                        </ButtonContainer>
                      </>
                    ) : (
                      <>
                        <CardTitle>{cadastro.nomeOng}</CardTitle>
                        <CardText>{cadastro.causa}</CardText>
                        <CardText>{cadastro.descricaoOng}</CardText>
                        {expandedCards[index] && (
                          <>
                            <CardText>
                              Telefone: {cadastro.telefoneOng}
                            </CardText>
                            <CardText>Email: {cadastro.emailOng}</CardText>
                            <CardText>Site: {cadastro.linkSite}</CardText>
                            <CardText>
                              Redes Sociais: {cadastro.linkRedesSociais}
                            </CardText>
                            <CardText>
                              Endereço: {cadastro.enderecoOng}
                            </CardText>
                            <CardText>Modelo: {cadastro.modeloOng}</CardText>
                            <ButtonContainer>
                              <ApproveButton
                                onClick={() => handleApprove(index)}
                              >
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
                        <ExpandButton
                          onClick={() => handleEdit(index, cadastro)}
                        >
                          Editar
                        </ExpandButton>
                      </>
                    )}
                  </Card>
                ))}
              </CardContainer>
            </>
          )}
          {activeTab === "dashboard" && (
            <DashboardContainer>
              <DashboardCard>
                <DashboardTitle>Visitas Hoje</DashboardTitle>
                <DashboardText>150</DashboardText>
              </DashboardCard>
              <DashboardCard>
                <DashboardTitle>Novos Cadastros</DashboardTitle>
                <DashboardText>10</DashboardText>
              </DashboardCard>
              <DashboardCard>
                <DashboardTitle>ONGs Ativas</DashboardTitle>
                <DashboardText>25</DashboardText>
              </DashboardCard>
              <DashboardCard>
                <DashboardTitle>Gráfico de Barras</DashboardTitle>
                <Bar data={barData} />
              </DashboardCard>
              <DashboardCard>
                <DashboardTitle>Gráfico de Linhas</DashboardTitle>
                <Line data={lineData} />
              </DashboardCard>
              <DashboardCard>
                <DashboardTitle>Gráfico de Pizza</DashboardTitle>
                <Pie data={pieData} />
              </DashboardCard>
            </DashboardContainer>
          )}
          {activeTab === "clientes" && (
            <ClientsContainer>
              <ClientCard>
                <ClientTitle>Atendimento Psicológico Paróquia São Luís Gonzaga</ClientTitle>
                <ClientText>Email: psicologia@paroquiaslg.com</ClientText>
                <ClientText>Telefone: (11) 1234-5678</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>SINPESP</ClientTitle>
                <ClientText>Email: contato@sinpesp.org.br</ClientText>
                <ClientText>Telefone: (11) 8765-4321</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Clínica Ana Maria Popovic</ClientTitle>
                <ClientText>Email: atendimento@anamariapopovic.com</ClientText>
                <ClientText>Telefone: (11) 1122-3344</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Clínica Psicológica da Universidade de Guarulhos</ClientTitle>
                <ClientText>Email: psicologia@ung.br</ClientText>
                <ClientText>Telefone: (11) 2233-4455</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>PAN</ClientTitle>
                <ClientText>Email: atendimento@pan.org.br</ClientText>
                <ClientText>Telefone: (11) 3344-5566</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>ABPS</ClientTitle>
                <ClientText>Email: contato@abps.org.br</ClientText>
                <ClientText>Telefone: (11) 4455-6677</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Associação Vida Carrapicho</ClientTitle>
                <ClientText>Email: contato@vidacarrapicho.org.br</ClientText>
                <ClientText>Telefone: (11) 5566-7788</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Cão Sem Dono</ClientTitle>
                <ClientText>Email: contato@caosemdono.org.br</ClientText>
                <ClientText>Telefone: (11) 6677-8899</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Instituto Favela da Paz</ClientTitle>
                <ClientText>Email: contato@faveladapaz.org.br</ClientText>
                <ClientText>Telefone: (11) 7788-9900</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Instituto Adus</ClientTitle>
                <ClientText>Email: contato@adus.org.br</ClientText>
                <ClientText>Telefone: (11) 8899-0011</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>GRAACC</ClientTitle>
                <ClientText>Email: contato@graacc.org.br</ClientText>
                <ClientText>Telefone: (11) 9900-1122</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Fundação ABRINQ</ClientTitle>
                <ClientText>Email: contato@abrinq.org.br</ClientText>
                <ClientText>Telefone: (11) 0011-2233</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Sebrae</ClientTitle>
                <ClientText>Email: contato@sebrae.com.br</ClientText>
                <ClientText>Telefone: (11) 1122-3344</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Fundação Bradesco</ClientTitle>
                <ClientText>Email: contato@fundacaobradesco.org.br</ClientText>
                <ClientText>Telefone: (11) 2233-4455</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Digital Innovation One</ClientTitle>
                <ClientText>Email: contato@dio.me</ClientText>
                <ClientText>Telefone: (11) 3344-5566</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Montagem de arranjos florais</ClientTitle>
                <ClientText>Email: contato@seflorpraser.com.br</ClientText>
                <ClientText>Telefone: (11) 4455-6677</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Cerâmica</ClientTitle>
                <ClientText>Email: contato@beijaflordaalma.com.br</ClientText>
                <ClientText>Telefone: (11) 5566-7788</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Corte e costura</ClientTitle>
                <ClientText>Email: contato@sigbol.com.br</ClientText>
                <ClientText>Telefone: (11) 6677-8899</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Bom-Prato</ClientTitle>
                <ClientText>Email: contato@bomprato.sp.gov.br</ClientText>
                <ClientText>Telefone: (11) 7788-9900</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Banco de Alimentos</ClientTitle>
                <ClientText>Email: contato@bancodealimentos.org.br</ClientText>
                <ClientText>Telefone: (11) 8899-0011</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Pão do Povo da Rua</ClientTitle>
                <ClientText>Email: contato@paodopovodarua.org.br</ClientText>
                <ClientText>Telefone: (11) 9900-1122</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Tonkiri</ClientTitle>
                <ClientText>Email: contato@tonkiri.org.br</ClientText>
                <ClientText>Telefone: (11) 0011-2233</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Sesc Mesa Brasil</ClientTitle>
                <ClientText>Email: contato@mesabrasil.sescsp.org.br</ClientText>
                <ClientText>Telefone: (11) 1122-3344</ClientText>
              </ClientCard>
              <ClientCard>
                <ClientTitle>Orgânico Solidario</ClientTitle>
                <ClientText>Email: contato@organicosolidario.org.br</ClientText>
                <ClientText>Telefone: (11) 2233-4455</ClientText>
              </ClientCard>
            </ClientsContainer>
          )}
        </Content>
      </Container>
    </>
  );
}

export default Admin;
