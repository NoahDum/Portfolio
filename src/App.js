import Footer from './components/Footer';
import './App.scss';
import aPropos from "./image/a-propos-de-moi.png"
import projet from "./image/MesProjets.png"
import maitrises from "./image/mesMaitrises.png"
import formation from "./image/mesFormations.png"
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Noah Duminil</h1>
      </header>
      <main>
        <img onClick={() => navigate('/about')} src={aPropos} alt="" />
        <img src={projet} alt="" />
        <img src={maitrises} alt="" />
        <img src={formation} alt="" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
