import { useEffect, useState } from "react"

const CountDownTimer = () => {

    const [inputValue, setInputValue] = useState(12)
    const [time, setTime] = useState(inputValue * 60)
    const [start, setStart] = useState(false)
    const [pause, setPause] = useState(false)

    const initialTime = inputValue * 60
    useEffect(() => {
        if (start) {
            let timeId = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000)

            return () => clearInterval(timeId)
        }

    }, [start])

    const formateTime = (totalSeconds) => {
        let totalMinutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60;
        let minutes = totalMinutes % 60
        let hours = Math.floor(totalMinutes / 60);

        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        return { h: hours, m: minutes, s: seconds, }
    }

    const { h, m, s } = formateTime(time)

    useEffect(() => {
        document.title = time ? `⌛ ${m} m : ${s} s` : 'Pomodoro app'
    }, [time])

    const startTimerHandler = () => {
        setStart(true)
    }
    const resetTimerHandler = () => {
        setTime(initialTime); setStart(false); setPause(false)
    }
    return (
        <div>
            {/* <input type='number' placeholder="Enter duration" value={inputValue} onChange={(event) => setInputValue(event.target.value)} /> */}

            {<h1>{` ${m} m : ${s} s`} </h1>}
            {start ?
                <button onClick={() => { setPause(true); setStart(false) }}>Pause</button> :
                pause ? <button onClick={startTimerHandler}>Resume</button> : <button onClick={startTimerHandler}>start</button>
            }
            <button onClick={resetTimerHandler}>reset</button>
        </div >
    )
}
export default CountDownTimer