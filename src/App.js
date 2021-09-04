import './App.css';
import {useState} from "react";


function App() {
    const [counter, setCounter] = useState(0)
    return (
        <div className="App">
            <h1>Basic Counter App...</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
}

export default App;
