import { useEffect, useState } from "react"

const CountDownTimer = () => {

    const [inputValue, setInputValue] = useState('')
    const [time, setTime] = useState(inputValue * 60 * 24)
    const [isCountingDown, setIsCountingDown] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time - 1000)
    //     }, 1000)

    // }, [time])

    let timerId;
    const startTimerHandler = () => {
        timerId = setIsCountingDown(true)
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }
    const stopTimerHandler = () => {
        setIsCountingDown(false)
        clearTimeout(timerId)
    }

    return (
        <div>
            <input type='number' placeholder="Enter days" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

            {isCountingDown ? <button onClick={startTimerHandler}>stop</button> : <button onClick={stopTimerHandler}>start</button>}

            <h1>{time} </h1>

        </div>
    )
}
export default CountDownTimer