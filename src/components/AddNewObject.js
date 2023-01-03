// Add a new object to the list of cars and display them on the screen.


import { useState } from 'react'
const AddNewObject = () => {
    const carsList = [
        {
            id: "c1",
            brand: "Toyota",
            make: "Corolla",
            model: "2007"
        },
        {
            id: "c2",
            brand: "Maruti Suzuki",
            make: "Omni",
            model: "2003"
        },
        {
            id: "c3",
            brand: "Hyundai",
            make: "Santro",
            model: "2005"
        }
    ];

    const [data, setData] = useState(carsList)
    const [brand, setBrand] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();

        const newCar = {
            id: Math.random * 100,
            brand, make, model
        }
        setData([...data, newCar])
        setBrand('')
        setMake('')
        setModel('')

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={brand} onChange={(event) => setBrand(event.target.value)} />
                <input type="text" value={make} onChange={(event) => setMake(event.target.value)} />
                <input type="text" value={model} onChange={(event) => setModel(event.target.value)} />

                <button type="submit">
                    Add New Car
                </button>
            </form>
            {data.map((item) => (
                <li style={{ border: "1px solid black", width: '400px', marginTop: "10px" }} ker={item.id}>
                    <h1>Brand : {item.brand}</h1>
                    <h2>Make : {item.make}</h2>
                    <h3>Model : {item.model}</h3>
                </li>
            ))
            }
        </div >
    )
}
export default AddNewObject