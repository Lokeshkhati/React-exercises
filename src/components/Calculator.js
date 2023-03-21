import { useState } from "react"

const operations = ['+', '-', '*', '/']

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [chosenOperation, setChosenOperation] = useState('')
    // const [result, setResult] = useState()


    // const calculatorHandler = (event) => {

    //     const firstInput = Number(firstNumber)
    //     const secondInput = Number(secondNumber)

    //     if (firstNumber && secondNumber) {
    //         if (chosenOperation === '+') {
    //             setResult(firstInput + secondInput)
    //         }
    //         else if (chosenOperation === '-') {
    //             setResult(firstInput - secondInput)
    //         }
    //         else if (chosenOperation === '*') {
    //             setResult(firstInput * secondInput)
    //         }
    //         else if (chosenOperation === '/') {
    //             setResult(firstInput / secondInput)
    //         }
    //         else {
    //             alert('please select the operator')
    //         }
    //     }
    //     else {
    //         alert('provide inputs to perform this operation')
    //     }
    // }

    let result
    const firstInput = Number(firstNumber)
    const secondInput = Number(secondNumber)

    if (firstNumber && secondNumber) {
        if (chosenOperation === '+') {
            result = firstInput + secondInput
        }
        else if (chosenOperation === '-') {
            result = firstInput - secondInput
        }
        else if (chosenOperation === '*') {
            result = firstInput * secondInput
        }
        else if (chosenOperation === '/') {
            result = firstInput / secondInput
        }
    }
    else {
        // alert('provide inputs to perform this operation')
    }

    return (
        <div>
            <input type='number' placeholder="Enter first Number" value={firstNumber} onChange={(event) => setFirstNumber(event.target.value)} />

            <select onChange={(event) => setChosenOperation(event.target.value)}>
                <option value=""></option>
                {operations.map((operation) => (
                    <option key={operation} value={operation}>{operation} </option>))
                }
            </select>

            <input type='number' placeholder="Enter second Number" value={secondNumber} onChange={(event) => setSecondNumber(event.target.value)} />
            {/* <button onClick={calculatorHandler}>calculate</button> */}
            {result}

        </div>
    )
}
export default Calculator