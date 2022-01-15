import React from 'react'


function Hooktest() {

    const [count, setCount] = useState(0)

    return (
        <button onClick = { () => setCount(count+1) }>
            { count }      
        </button>
    );
}

const ReactHooks = () => {
    return (
        <div>
            
        </div>
    )
}



const moods = {
    happy: ' 😁 ',
    sad: ' 😂 '
}

const MoodContext = createContext(moods);

function App(props) {
    return (
        <MoodContext.Provider value={moods.happy}>
            
            <MoodEmoji />

        </MoodContext.Provider>
    );
}

Function MoodEmoji() {
    const mood = useContext(MoodContext);

    return <MoodContext.Consumer>
       {({ mood }) => <p> { mood } </p> } 
    </MoodContext.Consumer>
    
}


function Hooktest() {

    use

    return 
}

export default ReactHooks
