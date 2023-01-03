// Problem:  Create a subscribe form with an email and subscribe button.
// On clicking subscribe, check if the email already exists in the given array..
// if it exists show a message that the email is already subscribed, else show that you are now subscribed.

import { useState } from "react"

const SubscriberList = () => {
    const data = [
        {
            id: 1,
            mail: "tanay@neog.camp"
        },
        {
            id: 2,
            mail: "tanvi@neog.camp"
        },
        {
            id: 3,
            mail: "akanksha@neog.camp"
        },
        {
            id: 4,
            mail: "parul@neog.camp"
        },
        {
            id: 5,
            mail: "lokesh@neog.camp"
        }
    ];
    const [mail, setMail] = useState('')
    const [subsList, setSubsList] = useState(data)
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState("")

    const handleChange = (event) => {
        setMail(event.target.value)
        setShow(false)
    }

    const handleSubscribe = (event) => {
        event.preventDefault()
        setShow(true)
        const mailExits = subsList.find((elem) => elem.mail === mail)

        if (mailExits) {
            setMessage('Already subscribed to our newsletter')
        }
        else {
            setSubsList((prev) => prev.concat({ id: Math.random() * 100, mail }))
            setMessage('Added to list')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubscribe}>
                <input type="email" value={mail} onChange={handleChange} />
                <button type="submit">Subscribe</button>
            </form>

            {show && <span>{message}</span>}
        </div>
    )
}
export default SubscriberList