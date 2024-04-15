import {useState} from 'react';

export default function Bottone({testo, numero}) {
    const [count, setCount] = useState(numero);


    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            {testo}{count}
            <button onClick={increment}>
                {count}
            </button>
        </div>
    );
}