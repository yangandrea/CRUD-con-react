import {useState} from 'react';

export default function Alunno({alunno, loadAlunni}) {
    const [count, setCount] = useState(alunno.id);
    const [inCancellazione, setInCancellazione] = useState(false);
    const [inConferma, setInConferma] = useState(false);

    function increment() {
        setCount(count + 1);
    }
    async function canc(){
        setInCancellazione(true);
        await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method:"DELETE"});
        loadAlunni();
        setInCancellazione(false);
    }
    function richiediConferma(){
        setInConferma(true);
    }
    function annulla(){
        setInConferma(false);
    }
    return (
        <div>
            {alunno.id} - {alunno.nome} {alunno.cognome} -
            <button onClick={increment}>
                {count}
            </button>
            {' '}
            -
            {inCancellazione ?
            <div>Sto cancellando...</div>
            :
            <span>
            {
                inConferma ?
                <div>Sei sicuro di voler cancellare?
                    <button onClick={canc}>si</button>
                    <button onClick={annulla}>no</button></div>
                :
                <button onClick={richiediConferma}>Cancella</button>
            }
            </span>
            }
            <hr />
        </div>
    );
}