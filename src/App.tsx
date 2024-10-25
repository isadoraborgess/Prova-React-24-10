import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/CadastroUsuarios" element={<CadastroUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App