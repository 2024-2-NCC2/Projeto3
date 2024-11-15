import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Importação Boot
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importação Boot

const HeaderContainer = styled.header`
  .header {
    background-color: #000000;
    padding: 20px;
    display: center;
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
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  .abrace {
    color: #fff;
    /* Cor branca */
  }

  .sp {
    color: #9b0202;
    /* Cor vermelha */
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: gray;

  .login-form {
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-control {
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
  }

  .btn-primary {
    background-color: #9b0202;
    border-color: #9b0202;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
  }

  .btn-primary:hover {
    background-color: #7a0101;
    border-color: #7a0101;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-family: "Inter", sans-serif;
  }
`;

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  // Timeout para desconectar após 15 minutos (900000 ms)
  const timeoutDuration = 900000;
  let logoutTimer;

  const resetLogoutTimer = () => {
    if (logoutTimer) clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/login");
      alert("Sessão expirada. Por favor, faça login novamente.");
    }, timeoutDuration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        usuario,
        senha,
      });
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      resetLogoutTimer();
      navigate("/admin");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  // Resetar o timer de logout em qualquer interação do usuário
  React.useEffect(() => {
    window.addEventListener("mousemove", resetLogoutTimer);
    window.addEventListener("keydown", resetLogoutTimer);

    return () => {
      window.removeEventListener("mousemove", resetLogoutTimer);
      window.removeEventListener("keydown", resetLogoutTimer);
    };
  }, [resetLogoutTimer]); // Add the missing dependency

  return (
    <div>
      <HeaderContainer>
        <header className="header">
          <div className="logoHome">
            <span className="abrace">ABRACE</span>
            <span className="sp">SP</span>
          </div>
        </header>
      </HeaderContainer>

      <LoginContainer>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Usuário:</label>
              <input
                type="text"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                maxLength={20}
                required
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password" // Ensure the input type is "password"
                className="form-control"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                maxLength={20}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </form>
        </div>
      </LoginContainer>
    </div>
  );
}

export default Login;