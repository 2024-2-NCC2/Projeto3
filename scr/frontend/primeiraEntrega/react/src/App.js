import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Alimentacao from './pages/Alimentacao';
import Acolhimento from './pages/Acolhimento';
import Educacao from './pages/Educacao';
import SaudeMental from './pages/SaudeMental';
import MaisServicos from './pages/MaisServicos';
import SobreNos from './pages/SobreNos.js';
import Cadastro from './pages/Cadastro';
import Servicos01 from './pages/Servicos01.js';
import Servicos02 from './pages/Servicos02.js';
import Servicos03 from './pages/Servicos03.js';
import Servicos04 from './pages/Servicos04.js';
import Servicos05 from './pages/Servicos05.js';
import Servicos06 from './pages/Servicos06.js';


const url = 'https://placehold.co/414x248'

function App() {
  return (
    // <div className="App">
    //   <CaixaInformacoesComponente/>
    //   <img src={url} alt="minha imagem"></img>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/acolhimento" element={<Acolhimento />} />
        <Route path="/educacao" element={<Educacao />} />

        <Route path="/saude-mental" element={<SaudeMental />}/>
          <Route path="/saude-mental/servicos01" element={<Servicos01/>}/>
          <Route path="/saude-mental/servicos02" element={<Servicos02/>}/>
          <Route path="/saude-mental/servicos03" element={<Servicos03/>}/>
          <Route path="/saude-mental/servicos04" element={<Servicos04/>}/>
          <Route path="/saude-mental/servicos05" element={<Servicos05/>}/>
          <Route path="/saude-mental/servicos06" element={<Servicos06/>}/>
        
        <Route path="/mais-servicos" element={<MaisServicos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* <Route path="/servicos01" element={<Servicos01/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

