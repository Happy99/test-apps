import { useEffect, useState } from "react"

const App = () => {
    const [value, setValue] = useState(0)
    const [titulek, setTitulek] = useState(0)
    
    useEffect( () => {
        console.log("Já jsem useEffect - value")

        const button = document.querySelector( '.btn' )
        button.textContent = `Klik${
            value > 0 ? ` číslo ${value}` : ""
        }`
    }, [value])

    useEffect( () => {
        console.log("Já jsem useEffect - titulek")

        document.title = `Nový titulek ${value}`
    }, [titulek])

    return (
        <div>
            <h1>test</h1>
            <button className="btn" onClick={ () => setValue(value + 1) } >Klikni</button>
            <button type="button" onClick={ () => setTitulek(value) }>Titulek</button>
        </div>
    )
}

export default App