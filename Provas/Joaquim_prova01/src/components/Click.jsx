import { useState } from "react"
export default function Click(){
    const [count, setCount] = useState(0)

    if (count > 10){
        document.getElementsByClassName("mais")[0].style.backgroundColor = 'orange';
    };

    if (count < 0){
        document.getElementsByClassName("menos")[0].style.backgroundColor = 'red';
    }

    return(
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className="mais">
        +
        </button>
        <h2>{count}</h2>
        <button onClick={() => setCount((count) => count - 1)} className="menos">
        -
        </button>
    </div>
    )
}