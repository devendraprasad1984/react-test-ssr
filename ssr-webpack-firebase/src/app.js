import React, {useEffect, useState} from "react";
import getFacts from "./facts";


const App = props => {
    const [facts, setFacts] = useState([])
    useEffect(() => {
        getFacts().then(data => setFacts(data))
    }, [])

    const displayFacts = () => {
        return facts.map((fact, i) => {
            return <li key={'li-fact-' + i}>{fact.text}</li>
        })
    }
    return <div>
        <h1>main app to be rendered on server side</h1>
        <ul>
            {displayFacts()}
        </ul>
    </div>
}

export default App
