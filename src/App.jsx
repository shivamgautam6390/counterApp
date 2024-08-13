import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
        // useState(0)
        // let counter = 0;
    const addValue = () => {
        // count = count + 1
        setCount(count + 1);
        console.log(count)
    }
    const removeValue = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log(count)
        }
    }
    return ( < >

        <
        h1 > Counter < /h1> <
        h2 > Counter value: { count } < /h2> <
        button onClick = { addValue } > Add Value < /button> <
        button onClick = { removeValue } > Remove Value < /button>










        <
        />
    )
}

export default App