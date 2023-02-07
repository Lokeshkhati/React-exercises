import { useEffect, useRef, useState } from "react"

// Two buttons
// start and stop
// on Start click increment a counter from 0 every 1 sec.
// on Stop this counter should pause
// on Start click again resume the counter

const Counter = () => {
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)
    const timerIdRef = useRef(null)

    // one way of solving the problem using setInterval()
    // const countStartHandler = () => {
    //     timerIdRef.current =
    //         setInterval(() => {
    //             setCount(prevCount => prevCount + 1)
    //         }, 1000)
    // }

    // const countStopHandler = () => {
    //     clearInterval(timerIdRef.current)
    // }


    // other way of solving the same problem using setTimeout() and useEffect()

    useEffect(() => {
        if (start) {
            timerIdRef.current = setTimeout(() => {
                setCount(count + 1)
            }, 1000)
        }
        // return () => {
        //     clearTimeout(timerIdRef.current)
        // }

    }, [count, start])

    const countStartHandler = () => {
        setStart(true)

    }

    const countStopHandler = () => {
        clearTimeout(timerIdRef.current)
        setStart(false)
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