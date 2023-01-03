// Take the name from user input and display the appropriate message when clicked on "show welcome message"

// If the name is an odd number of characters display "Hello [name]" and if it's even then display "Hi [name]"

import { useState } from 'react'

const PracticeOne = () => {
    const [name, setName] = useState('')
    const [showMessage, setShowMessage] = useState(false)

    const clickHandler = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            setShowMessage(true);
        }
    };

    const changeHandler = (e) => {
        setShowMessage(false);
        setName(e.target.value);
    };

    function Message() {
        const evenLength = name.length % 2 === 0;
        return evenLength ? (
            <div>
                <h3>Hi {name}!</h3>
            </div>
        ) : (
            <div>
                <h3>Hello {name}!</h3>
            </div>
        );
    }

    return (
        <div>
            <form onSubmit={clickHandler}>
                <label>
                    Enter your name:
                    <input required type="text" value={name} onChange={changeHandler} />
                </label>
                <button type="submit" onClick={() => setShowMessage(true)
                }>Show Welcome message</button>

                {showMessage && <Message />}
            </form>
        </div >
    )
}
export default PracticeOne