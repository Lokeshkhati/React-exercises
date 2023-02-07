import { useRef, useState } from "react"

// Two buttons
// start and stop
// on Start click increment a counter from 0 every 1 sec.
// on Stop this counter should pause
// on Start click again resume the counter

const Counter = () => {
    const [count, setCount] = useState(0)
    const timerIdRef = useRef(null)

    const countStartHandler = () => {
        timerIdRef.current =
            setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
    }

    const countStopHandler = () => {
        clearInterval(timerIdRef.current)
    }
    return (
        <div>Counter :{count}
            <div>
                <button onClick={countStartHandler} >Start</button>
                <button onClick={countStopHandler}>Stop</button>
            </div>
        </div>
    )
}
export default Counter