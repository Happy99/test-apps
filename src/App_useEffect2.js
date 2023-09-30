import { useEffect, useState } from "react"

const App = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    const sizeControl = () => {
        setWindowSize(window.innerWidth)
    }

    useEffect( () => {
        console.log('pouzije se useeffect')
        window.addEventListener('resize', sizeControl)

        return () => {
            console.log("cleanUp function")

            window.removeEventListener('resize', sizeControl)
        }
    })

    return (
        <div>
            <h1>Sirka okna</h1>
            <h2>{windowSize}</h2>
        </div>
    )
}

export default App