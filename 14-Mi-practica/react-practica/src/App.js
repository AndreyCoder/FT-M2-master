import Familia from './components/react-intro/miFamilia/Familia.jsx'
import Saludo from './components/react-intro/saludo/Saludo.jsx';
import SaludoCalse from './components/react-intro/saludo/SaludoClase.jsx'
import State from './components/states/State.jsx';

let familia = [
  {
    id: 1,
    nombre: 'Andrey',
    apellido: 'Murillo',
    edad: 36
  },
  {
    id: 2,
    nombre: 'Hellen',
    apellido: 'Montero',
    edad: 35
  },
  {
    id: 3,
    nombre: 'Emily',
    apellido: 'Murillo',
    edad: 12
  },
  {
    id: 4,
    nombre: 'Ibrahim',
    apellido: 'Murillo',
    edad: 4
  },
]

function App() {

  return (
    <div>
      <Familia familia={familia} />
      <Saludo nombre='Soy Andrey' lang='es' />
      <SaludoCalse nombre='Soy Andrey' lang='en' />
      <State contador={0} />
    </div>
  );
}

export default App;
