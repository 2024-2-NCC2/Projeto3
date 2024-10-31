CREATE DATABASE IF NOT EXISTS cadastro;

USE cadastro;

CREATE TABLE PrestadorServico (
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nomeOng VARCHAR(255) NOT NULL,
telefoneOng VARCHAR(20),
emailOng VARCHAR(255),
linkSite VARCHAR(255),
linkRedesSociais TEXT,
logoOng VARCHAR(255),
fotosCarrosel TEXT,
enderecoOng VARCHAR(255),
dataCadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tipo_Servico (
idTipoServico INT AUTO_INCREMENT PRIMARY KEY,
causa VARCHAR(255) NOT NULL
);

CREATE TABLE Servico (
idServico INT AUTO_INCREMENT PRIMARY KEY,
descricao TEXT NOT NULL,
idUsuario INT,
idTipoServico INT,
FOREIGN KEY (idUsuario) REFERENCES PrestadorServico(idUsuario),
FOREIGN KEY (idTipoServico) REFERENCES Tipo_Servico(idTipoServico)
);