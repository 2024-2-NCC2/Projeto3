-- Criação do banco de dados

CREATE DATABASE IF NOT EXISTS cadastro;

USE cadastro;

-- Criação da tabela para usuários administradores

CREATE TABLE usuariosAdmin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Inserção de dados na tabela usuariosAdmin

INSERT INTO usuariosAdmin (usuario, senha) VALUES
    ("admin", "123"),
    ("admin2", "oii");

-- Criação da tabela de Prestador de Serviço (ONGs)
CREATE TABLE PrestadorServico (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeOng VARCHAR(255),
    telefoneOng VARCHAR(20),
    emailOng VARCHAR(255),
    linkSite VARCHAR(255),
    linkRedesSociais TEXT,
    enderecoOng VARCHAR(255),
    logoOng VARCHAR(255),
    fotosCarrosel TEXT,
    dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de Tipos de Serviço

CREATE TABLE Tipo_Servico (
    idTipoServico INT PRIMARY KEY AUTO_INCREMENT,
    causa VARCHAR(255) NOT NULL
);

-- Criação da tabela de Serviços, com chaves estrangeiras para PrestadorServico e Tipo_Servico

CREATE TABLE Servico (
    idServico INT PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT,
    modeloOng VARCHAR(255),
    idUsuario INT,
    idTipoServico INT,
    FOREIGN KEY (idUsuario) REFERENCES PrestadorServico(idUsuario) ON DELETE CASCADE,
    FOREIGN KEY (idTipoServico) REFERENCES Tipo_Servico(idTipoServico) ON DELETE SET NULL
);