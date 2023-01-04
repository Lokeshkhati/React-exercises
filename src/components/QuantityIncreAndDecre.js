// Problem: You have a list of items with price and quantity..Create two buttons for each and every element in the data list.One will increment the quantity of the particular item, and one will decrement the quantity..Show all details of the items on the page.

import { useState } from "react";

const QuantityIncreAndDecre = () => {
    const data = [
        {
            id: 1,
            item: "shoes",
            price: 100,
            quantity: 1
        },
        {
            id: 2,
            item: "jacket",
            price: 400,
            quantity: 1
        },
        {
            id: 3,
            item: "hat",
            price: 50,
            quantity: 1
        },
        {
            id: 4,
            item: "sunglasses",
            price: 250,
            quantity: 1
        },
        {
            id: 5,
            item: "gloves",
            price: 300,
            quantity: 1
        },

    ];

    const [products, setProducts] = useState(data)

    const incrementHandler = (id) => {
        const updatedProducts = products.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product)

        setProducts(updatedProducts)

    }
    const decrementHandler = (id) => {
        const updatedProducts = products.map((product) => product.id === id ? { ...product, quantity: product.quantity > 1 && product.quantity - 1 } : product)

        setProducts(updatedProducts)
    }

    return (
        <div>
            <ul>
                {
                    products?.map((product) => (
                        <li key={product?.id}>
                            {product?.item} ({product?.price})
                            <button onClick={() => decrementHandler(product?.id)}> - </button>
                            {product?.quantity}
                            <button onClick={() => incrementHandler(product?.id)}>+</button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default QuantityIncreAndDecre