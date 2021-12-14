import './App.css';
import {useState} from "react";

function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(++counter)
    }
    const decrement = () => {
        setCounter(--counter)
    }
    const increment100 = () => {
        setCounter(counter + 100)
    }
    const decrement100 = () => {
        setCounter(counter - 100)
    }


    return (
        <div className="App">
            <h2>Counter is: {counter}</h2>
            <br/>
            <button onClick={increment}>Increment</button>
            <br/>
            <button onClick={decrement}>Decrement</button>
            <br/>
            <button onClick={increment100}>Increment100</button>
            <br/>
            <button onClick={decrement100}>Decrement100</button>
        </div>
    );
}

export default App;
