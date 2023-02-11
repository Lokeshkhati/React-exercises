import { useState } from "react";

const Lists = () => {

    const arr = ["Get some Milk", "Go to Gym", "Get Some beer", "Go to College"];
    const [items, setItems] = useState(arr)
    const [currIndex, setCurrIndex] = useState('')


    const changeColor = (idx) => {
        setCurrIndex(idx)

    }
    return (
        <div>
            {
                items.map((item, index) => (
                    <h3 style={{ color: currIndex === index ? "red" : "" }} onClick={() => changeColor(index)} >{item} </h3>
                ))
            }
        </div>
    )
}
export default Lists