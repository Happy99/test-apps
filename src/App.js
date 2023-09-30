import { useEffect, useState } from "react"

import Book from "./components/Book"

const App = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button type="button" onClick={ () => show ? setShow(false) : setShow(true)} >Ukaz / skryj</button>

            {show && <Book />}
        </div>
    )

}

export default App