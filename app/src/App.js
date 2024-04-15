import Bottone from './Bottone';
import './App.css';

const alunni = [
  {id: 1, nome: 'Mario', cognome: 'Rossi'},
  {id: 2, nome: 'Giuseppe', cognome: 'Verdi'},
  {id: 3, nome: 'Luigi', cognome: 'Bianchi'},
];

function App() {
  return (
    <div className="App">
      {
        alunni.map((alunno) => (
          <Bottone 
          testo = {`${alunno.nome} ${alunno.cognome} `}
          numero = {alunno.id}
          />
        ))
      }
    </div>
  );
}

export default App;
