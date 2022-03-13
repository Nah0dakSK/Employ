import { useRef } from "react"

const Cursor = () => {
    const dot = useRef(null);

    return(
        <>
        <div ref={dot} className="cursorDot"></div>        
        </>
    )
}