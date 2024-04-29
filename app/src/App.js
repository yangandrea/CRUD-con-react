import Alunno from './Alunno';
import './App.css';
import {useEffect, useState} from 'react';
//import loading from './200.gif';

function App() {
  const [alunni, setAlunni] = useState([]);

  const[inCaricamento, setInCaricamento] = useState(false);

  const[form, setForm] = useState(false);
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  useEffect(() => {
    loadAlunni();
  }, []);

async function loadAlunni(){
  setInCaricamento(true);
  const response = await fetch('http://localhost:8080/alunni', {
    method:"GET",
  });
  const a = await response.json();
  setAlunni(a);
  setInCaricamento(false);
};

async function salvaAlunno(){
  setInCaricamento(true);
  const response = await fetch('http://localhost:8080/alunni', {
    method:"POST",
    headers: {  'Content-Type': 'application/json' },
    body: JSON.stringify({nome: nome, cognome: cognome}) 
  });
  loadAlunni();
  setForm(false);
};
  function gestiscicambionome(e){
    setNome(e.target.value)
  }
  function gestiscicambiocognome(e){
    setCognome(e.target.value)
  }
  return (
    <div className="App">
      { 
        inCaricamento ?
        <div>Caricamento in corso...</div>
        :
        alunni.map((alunno) => (
          <Alunno alunno = {alunno} loadAlunni={loadAlunni} key={alunno.id}/>
        ))
      }
      <button onClick={() => setForm(true)}>Aggiungi alunno</button>
      { form &&
      <div>
        <h1>Aggiungi alunno</h1>
      <div> nome: <input type="text" onChange = {gestiscicambionome} value={nome} placeholder='inserisci il nome' /></div> 
        <div> cognome: <input type="text" onChange = {gestiscicambiocognome} value={cognome} placeholder='inserisci il cognome' /></div> 
        <button onClick={salvaAlunno}>Salva</button>
        <button onClick={() => setForm(false)}>Annulla</button>
        {nome} {cognome}
      </div>
      }
    </div>
  );
}
export default App;
