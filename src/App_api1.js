import { useEffect, useState } from "react"

const App = () => {
    const [quote, setQuote] = useState ("")
    const apiUrl = "https://api.kanye.rest/"
    
    useEffect( () => {
        getQuote()
    }, [])

    const getQuote = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()

        setQuote(data["quote"])
    }

    return (
        <div>
            <h1>{quote}</h1>
        </div>
    )
}

export default App