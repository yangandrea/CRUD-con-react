import Alunno from './Alunno';
import './App.css';
import {useEffect, useState} from 'react';
//import loading from './200.gif';

function App() {
  const [alunni, setAlunni] = useState([]);

  const[inCaricamento, setInCaricamento] = useState(false);

  useEffect(() => {
    loadAlunni();
  }, []);

async function loadAlunni(){
  setInCaricamento(true);
  const response = await fetch('http://localhost:8080/alunni', {method:"GET"});
  const a = await response.json();
  setAlunni(a);
  setInCaricamento(false);
};

  return (
    <div className="App">
      { 
        inCaricamento ?
        <div><img src='./500.gif' alt='loading'/></div>
      :
        alunni.map((alunno) => (
          <Alunno alunno = {alunno} loadAlunni={loadAlunni} key={alunno.id}/>
        ))
      }
    </div>
  );
}

export default App;
