import logo from './logo.svg';
import './App.css';

let counter = 0

function AddCounter() {
    counter = counter + 1
}

function RemoveCounter() {
    counter -= 1;
    console.log(counter)
}

function App() {
    return ( <
        >
        <
        h1 > Counter { counter } < /h1>  <
        button onClick = { AddCounter } > Add value < /button> <
        button onClick = { RemoveCounter } > Remove value < /button>  < / >
    );
}

export default App;