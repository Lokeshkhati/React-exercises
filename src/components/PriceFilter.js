// **Problem:**  Filter list of items using price
// Take 2 inputs from the user. A lower price, and an upper price. List only the products which fall in between the lower and upper price range.


import { useState } from "react";
const PriceFilter = () => {
    const data = [
        {
            id: 1,
            item: "shoes",
            price: 100,
        },
        {
            id: 2,
            item: "jacket",
            price: 400,
        },
        {
            id: 3,
            item: "hat",
            price: 50,
        },
        {
            id: 4,
            item: "sunglasses",
            price: 250,
        },
        {
            id: 5,
            item: "gloves",
            price: 300,
        },

    ];

    const [products, setProducts] = useState(data)
    const [lowerLimit, setLowerLimit] = useState(0)
    const [upperLimit, setUpperLimit] = useState(200)
    // }

    return (
        <div>
            <div>
                <label>Lower Limit:</label>

                <input
                    type="number"
                    onChange={(e) => setLowerLimit(e.target.value)}
                    placeholder="lower limit"
                    value={lowerLimit}
                />
            </div>
            <div>
                <label>Upper Limit:</label>
                <input
                    type="number"
                    onChange={(e) => setUpperLimit(e.target.value)}
                    placeholder="upper limit"
                    value={upperLimit}
                />
            </div>

            <ul>
                {products.map((product) => {
                    if (product.price <= upperLimit && product.price >= lowerLimit)
                        return (
                            <li key={product.id}>
                                {product.item}  -  {product.price}
                            </li>
                        )
                    return null
                })}
            </ul>
        </div >
    )
}
export default PriceFilter