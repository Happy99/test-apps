import { useEffect, useState } from "react"

const App = () => {
    const apiUrl = "http://api.open-notify.org/iss-now.json"

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [urlMap, setUrlMap] = useState("")

    const getApiData = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()

        if ( data["message"] === "success" ) {
            console.log(data)
            setLatitude(data["iss_position"]["latitude"])
            setLongitude(data["iss_position"]["longitude"])

            const iss_long = data["iss_position"]["longitude"]
            const iss_lat = data["iss_position"]["latitude"]

            setUrlMap(`https://mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=3`)
        }
        else {
            console.error(data["message"])
        }

    }

    useEffect( () => {
        getApiData()
    }, [])

    return (
        <div>
            <h1>API</h1>
            <h2>Zemepisna sirka</h2>
            <p>{latitude}</p>
            <h2>Zemepisna delka</h2>
            <p>{longitude}</p>

            <a href={urlMap} target="_blank">Pozice ISS na mapě</a>
        </div>
    )
}

export default App