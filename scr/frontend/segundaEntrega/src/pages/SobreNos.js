import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faXTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import styled from "styled-components";

function SobreNos() {
    useEffect(() => {
        document.body.style.backgroundColor = "black";
    }, []);

    const navigate = useNavigate();

    const handleSaibaMaisClick = () => {
        navigate("/"); // Redireciona para a página Home
    };

    return (
        <div>
            <Header />

            <main>
                <section style={styles.hero}>
                    <div style={styles.overlay}>
                        <h1 style={styles.heroTitle}>A cidade que não dorme! </h1>
                    </div>
                </section>

                <section style={styles.quemSomos}>
                    <div style={styles.content}>
                        <div style={styles.fotoGrupo}>
                            <div style={styles.fotoPlaceholder}>
                            </div>
                        </div>

                        {/* Container da descrição e botão juntos */}
                        <div style={styles.descricaoContainer}>
                            <div style={styles.descricao}>
                                <h2 style={styles.titulo}>QUEM SOMOS?</h2>
                                <p style={styles.texto}>
                                    Nosso time é composto por cinco estudantes de Ciências da
                                    Computação, todos no segundo semestre na FECAP:
                                    <span>
                                        <a
                                            href="https://www.linkedin.com/in/andr%C3%A9-dos-santos-greg%C3%B3rio-025a402ba/"
                                            style={{ color: "#fff" }}
                                        > André Gregório dos Santos</a>,
                                        <a
                                            href="https://www.linkedin.com/in/guilhermefogolin/"
                                            style={{ color: "#fff" }}
                                        > Guilherme Reis Fogolin de Godoy</a>,
                                        <a
                                            href="https://www.linkedin.com/in/lucas-moreira-de-godoy-289671264/"
                                            style={{ color: "#fff" }}
                                        > Lucas Moreira de Godoy</a>,
                                        <a
                                            href="https://www.linkedin.com/in/pedrohnlemos/"
                                            style={{ color: "#fff" }}
                                        > Pedro Henrique Nascimento Lemos</a>,
                                        <a
                                            href="https://www.linkedin.com/in/yan-cezareto-792ba22b8/"
                                            style={{ color: "#fff" }}
                                        > Yan Ramos Cezareto.</a>
                                    </span>
                                </p>

                                <p style={styles.texto}>
                                    Este projeto tem como objetivo criar um site que reúne
                                    serviços gratuitos ou a preços acessíveis disponíveis na
                                    cidade de São Paulo.
                                </p>
                            </div>
                            <div style={styles.botaoContainer}>
                                <button
                                    style={styles.saibaMaisBtn}
                                    onClick={handleSaibaMaisClick}
                                    onMouseOver={(e) =>
                                    (e.target.style.backgroundColor =
                                        styles.saibaMaisBtnHover.backgroundColor)
                                    }
                                    onMouseOut={(e) =>
                                    (e.target.style.backgroundColor =
                                        styles.saibaMaisBtn.backgroundColor)
                                    }
                                >
                                    SAIBA MAIS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={styles.porqueSite}>
                    <div style={styles.content2}>
                        <h2 style={styles.titulo2}>Por que estamos fazendo este site?</h2>
                        <p style={styles.texto}>
                            Estamos desenvolvendo este site com o propósito de facilitar o
                            acesso a serviços gratuitos ou a preços acessíveis na cidade de
                            São Paulo. Sabemos que muitas pessoas enfrentam desafios
                            financeiros e nem sempre têm conhecimento das opções que estão
                            disponíveis sem custo ou com valores reduzidos. Nosso objetivo é
                            centralizar essas informações de maneira organizada e acessível,
                            permitindo que o público encontre, de forma rápida e simples,
                            serviços essenciais como saúde, educação, cultura, lazer e muito
                            mais. Queremos que o site seja uma ferramenta de apoio para quem
                            precisa e que, ao mesmo tempo, ajude a promover iniciativas que
                            muitas vezes não recebem a visibilidade necessária.
                        </p>
                        <p style={styles.texto}>
                            Nosso principal objetivo é contribuir com a sociedade, utilizando
                            a tecnologia para resolver um problema real e relevante.
                            Acreditamos que, ao oferecer uma plataforma completa e bem
                            estruturada, podemos impactar positivamente a vida das pessoas e
                            ajudar a reduzir desigualdades. Além disso, este projeto também é
                            uma excelente oportunidade para aplicarmos nossos conhecimentos
                            acadêmicos na prática, trabalhando em equipe e desenvolvendo
                            habilidades técnicas e interpessoais que serão fundamentais para
                            nossas futuras carreiras como profissionais de TI.
                        </p>
                        <br></br><br></br>
                    </div>

                    <section style={styles.content2}>
                        <h2 style={styles.titulo2}>Acompanhe nosso projeto nas redes sociais! </h2>
                        <div style={styles.linksContainer}>
                            <a href="https://www.instagram.com/abracesp" target="_blank" style={styles.link}> {/* Alterar o link para nossa rede */}
                                <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
                                Instagram
                            </a>
                            <a href="https://x.com/projetoabracesp" target="_blank" style={styles.link}> {/* Alterar o link para nossa rede */}
                                <FontAwesomeIcon icon={faXTwitter} style={styles.icon} />
                                X
                            </a>
                            <a href="https://www.linkedin.com/in/abracesp" target="_blank" style={styles.link}> {/* Alterar o link para nossa rede */}
                                <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
                                LinkedIn
                            </a>
                        </div>
                    </section>
                </section>




            </main>

            <Footer />
        </div>
    );
}

const styles = {
    hero: {
        height: "450px",
        width: "100%",
        backgroundImage: "url(/img/sobreNos/spsobrenos.jpg)", // Atualize para o caminho correto
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    overlay: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))", // Ajuste as cores e a direção conforme desejado
    },
    heroTitle: {
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "left",
        color: "#fff",
        cursor: "pointer",
    },

    quemSomos: {
        display: "flex",
        justifyContent: "center",
        padding: "50px 20px",
        backgroundColor: "#000",
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1000px",
        width: "100%",
    },
    content2: {
        display: "block",
        width: "100%",
        maxWidth: "1000px",
        padding: "0 20px",
    },
    fotoGrupo: {
        flex: 1,
        marginRight: "20px",
        backgroundImage: "url(/img/sobreNos/grupo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "5px solid #9B0202", // Defina a espessura, estilo e cor da borda
        borderRadius: "20px", // Opcional: arredonda os cantos da borda
    },
    fotoPlaceholder: {
        width: "100%",
        marginRight: "400px",
        height: "500px",
        width: "150px",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        color: "#222",
    },
    descricaoContainer: {
        flex: 2,
        display: "flex",
        flexDirection: "column", // Itens ficam um embaixo do outro
        justifyContent: "space-between", // Espalha os itens (texto e botão)
        padding: "10px",
    },
    descricao: {
        marginLeft: "100px",
        marginBottom: "20px", // Espaçamento entre descrição e botão
    },
    titulo: {
        color: "#9B0202",
        fontSize: "5rem",
        lineHeight: "100%",
        marginBottom: "10px",
    },
    titulo2: {
        color: "#9B0202",
        fontSize: "2rem",
        marginBottom: "30px",
        textAlign: "left",
    },
    texto: {
        fontSize: "1.1rem",
        lineHeight: "1.5",
        marginBottom: "10px",
        color: "#fff",
        textAlign: "left",
        textDecoration: "none",
    },
    porqueSite: {
        padding: "50px 20px",
        backgroundColor: "#000",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    botaoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    saibaMaisBtn: {
        fontFamily: "Inter', sans-serif",
        fontSize: "1.2rem",
        padding: "10px 30px",
        backgroundColor: "#9B0202",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.3s",
    },
    saibaMaisBtnHover: {
        backgroundColor: "#6d0b0b",
        transform: "scale(1.2)",
    },

    linksContainer: {
        display: "flex",
        justifyContent: "flex-start",
        gap: "30px",
    },
    link: {
        color: "#fff",
        fontSize: "1.2rem",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "5px",
    },
    icon: {
        marginRight: "10px",
    },
};

export default SobreNos;