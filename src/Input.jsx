import { useState } from "react"

const Input = () => {
    const [imputValue , setImputValue]=useState('')
   
    let onchange = (event) => {
        const newValue = event.target.value;
        // setInputValue(newValue)
    }
   
    return (
        <div>
            <p>{cValue}</p>
        </div>
    )
}
export default Input