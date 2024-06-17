import { useState } from "react";
import './Counter.css';


function Counter(){

    const [count, setCount] = useState(0);
    return(
        <div className="counter">
        <div id="count">
            {count}
        </div>
        <div className="button">
            <button id="Inc" onClick={() => setCount(count+1)}>Increment</button>
            <button id="Dec" onClick={() => setCount(count-1)}>Decrement</button>
        </div>
        </div>
    )
}

export default Counter;