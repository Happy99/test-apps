import { useEffect, useState } from "react"

const apiUrl = "http://api.open-notify.org/iss-now.json"

const App = () => {
    const [loading, setLoading] = useState(true)
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect( () => {
        fetch(apiUrl)
            .then( (response) => response.json() )
            .then( (data) => data["iss_position"] )
            .then( (position) => {
                setLatitude(position["latitude"])
                setLongitude(position["longitude"])
                setLoading(false)
            })
        
    })

    if ( loading === true ) return <h1>Nacitani stranky ...</h1>
    
    return (
        <div>
            <h1>Obsah stranky</h1>
            <h2>Zemepisna sirka</h2>
            <p>{latitude}</p>
            <h2>Zemepisna delka</h2>
            <p>{longitude}</p>            
        </div>
    )

}

export default App