import './App.css';
import Encabezado from './components/Encabezado.jsx';
import Acerca from './components/Acerca.jsx';
import Experiencia from './components/Experiencia.jsx';
import Educacion from './components/Educacion.jsx';
import Habilidades from './components/Habilidades.jsx';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Experiencia />
        <Educacion />
        <Habilidades />
      </main>
    </div>
  )
}

export default App;