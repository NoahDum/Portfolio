import Footer from './components/Footer';
import './App.scss';
import Example from './components/Carrou';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Noah Duminil</h1>
      </header>
      <main>
        <Example className="caroussel"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
