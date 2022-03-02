import { useRef } from "react"
import App from "../App.js"

const Cursor = () => {
    const dot = useRef(null);

    return(
        <>
        <div ref={dot} className="cursorDot"></div>        
        </>
    )
}