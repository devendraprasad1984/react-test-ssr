import React from "react";


const App = props => {
    const facts=props.facts.map((fact,i)=>{
        return <li key={'li-fact-'+i}>{fact.text}</li>
    })
    return <div>
        <h1>main app to be rendered on server side</h1>
        <ul>
            {facts}
        </ul>
    </div>
}

export default App
