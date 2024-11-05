import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Alimentacao from './pages/Alimentacao';
import Acolhimento from './pages/Acolhimento';
import Educacao from './pages/Educacao';
import SaudeMental from './pages/SaudeMental';
import MaisServicos from './pages/MaisServicos';
import SobreNos from './pages/SobreNos.js';
import Cadastro from './pages/Cadastro';
import Servicos01 from './pages/servicosSaudeMental/Servicos01.js';
import Servicos02 from './pages/servicosSaudeMental/Servicos02.js';
import Servicos03 from './pages/servicosSaudeMental/Servicos03.js';
import Servicos04 from './pages/servicosSaudeMental/Servicos04.js';
import Servicos05 from './pages/servicosSaudeMental/Servicos05.js';
import Servicos06 from './pages/servicosSaudeMental/Servicos06.js';
import Servicos07 from './pages/servicosMais/Servicos07.js';
import Servicos08 from './pages/servicosMais/Servicos08.js';
import Servicos09 from './pages/servicosMais/Servicos09.js';
import Servicos10 from './pages/servicosMais/Servicos10.js';
import Servicos11 from './pages/servicosMais/Servicos11.js';
import Servicos12 from './pages/servicosMais/Servicos12.js';
import Servicos13 from './pages/servicosEducacao/Servicos13.js';
import Servicos14 from './pages/servicosEducacao/Servicos14.js';
import Servicos15 from './pages/servicosEducacao/Servicos15.js';
import Servicos16 from './pages/servicosEducacao/Servicos16.js';
import Servicos17 from './pages/servicosEducacao/Servicos17.js';
import Servicos18 from './pages/servicosEducacao/Servicos18.js';
import Servicos19 from './pages/servicosAlimentacao/Servicos19.js';
import Servicos20 from './pages/servicosAlimentacao/Servicos20.js';
import Servicos21 from './pages/servicosAlimentacao/Servicos21.js';
import Servicos22 from './pages/servicosAlimentacao/Servicos22.js';
import Servicos23 from './pages/servicosAlimentacao/Servicos23.js';
import Servicos24 from './pages/servicosAlimentacao/Servicos24.js';
import Servicos25 from './pages/servicosAcolhimento/Servicos25.js';
import Servicos26 from './pages/servicosAcolhimento/Servicos26.js';
import Servicos27 from './pages/servicosAcolhimento/Servicos27.js';
import Servicos28 from './pages/servicosAcolhimento/Servicos28.js';
import Servicos29 from './pages/servicosAcolhimento/Servicos29.js';
import Servicos30 from './pages/servicosAcolhimento/Servicos30.js';
import Admin from './pages/Admin.js';
import Login from './pages/Login.js';
import RotaProtegida from './pages/RotaProtegida.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/saude-mental" element={<SaudeMental />} />
        <Route path="/saude-mental/servicos01" element={<Servicos01 />} />
        <Route path="/saude-mental/servicos02" element={<Servicos02 />} />
        <Route path="/saude-mental/servicos03" element={<Servicos03 />} />
        <Route path="/saude-mental/servicos04" element={<Servicos04 />} />
        <Route path="/saude-mental/servicos05" element={<Servicos05 />} />
        <Route path="/saude-mental/servicos06" element={<Servicos06 />} />

        <Route path="/mais-servicos" element={<MaisServicos />} />
        <Route path="/mais-servicos/servicos07" element={<Servicos07 />} />
        <Route path="/mais-servicos/servicos08" element={<Servicos08 />} />
        <Route path="/mais-servicos/servicos09" element={<Servicos09 />} />
        <Route path="/mais-servicos/servicos10" element={<Servicos10 />} />
        <Route path="/mais-servicos/servicos11" element={<Servicos11 />} />
        <Route path="/mais-servicos/servicos12" element={<Servicos12 />} />

        <Route path="/educacao" element={<Educacao />} />
        <Route path="/educacao/servicos13" element={<Servicos13 />} />
        <Route path="/educacao/servicos14" element={<Servicos14 />} />
        <Route path="/educacao/servicos15" element={<Servicos15 />} />
        <Route path="/educacao/servicos16" element={<Servicos16 />} />
        <Route path="/educacao/servicos17" element={<Servicos17 />} />
        <Route path="/educacao/servicos18" element={<Servicos18 />} />

        <Route path="/alimentacao" element={<Alimentacao />} />
        <Route path="/alimentacao/servicos19" element={<Servicos19 />} />
        <Route path="/alimentacao/servicos20" element={<Servicos20 />} />
        <Route path="/alimentacao/servicos21" element={<Servicos21 />} />
        <Route path="/alimentacao/servicos22" element={<Servicos22 />} />
        <Route path="/alimentacao/servicos23" element={<Servicos23 />} />
        <Route path="/alimentacao/servicos24" element={<Servicos24 />} />


        <Route path="/acolhimento" element={<Acolhimento />} />
        <Route path="/acolhimento/servicos25" element={<Servicos25 />} />
        <Route path="/acolhimento/servicos26" element={<Servicos26 />} />
        <Route path="/acolhimento/servicos27" element={<Servicos27 />} />
        <Route path="/acolhimento/casa-do-aconchego" element={<Servicos28 />} />
        <Route path="/acolhimento/servicos29" element={<Servicos29 />} />
        <Route path="/acolhimento/servicos30" element={<Servicos30 />} />

        <Route path="/sobre-nos" element={<SobreNos />} />
        
        <Route path="/cadastro" element={<Cadastro />} />
        
        <Route path="/admin" element={<RotaProtegida component={Admin} />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;

