// Question 1: Create an input field and take string input in it from the user. Render the input value on the viewport. Create a button and on click of the button reverse the input and display it on the view.
import { useState } from "react";
const Mirror = () => {
    const [inputText, setInputText] = useState("");
    const handleReverse = () => {
        const joiningReversedArray = inputText.split("").reverse().join("");
        setInputText(joiningReversedArray);
    };
    return (
        <div>  onChange={(e) => setInputText(e.target.value)}
            placeholder="Start Typing..."
      />
            <p>{inputText}</p>
            {inputText && <button onClick={handleReverse}>Mirror it!</button>}</div>
    )
}
export default Mirror
