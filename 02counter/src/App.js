import './App.css';
import { useState } from 'react';

// let counter = 0




function App() {

    const [counter, setCounter] = useState(0)
    const addValue = () => {
        setCounter((counter) => (counter + 1))
    }
    const removeValue = () => {
        setCounter(counter - 1)
    }
    return ( <>
        <h1 > Counter { counter } </h1>  
        <button onClick = { addValue } > Add value </button> 
        <button onClick = { removeValue } > Remove value </button>
        </>
    );
}

export default App;