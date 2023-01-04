import { useState } from "react";

// Make a page that takes the following 2 inputs separately
// 1. Category name as a string (If user adds a category it should be added in the category dropdown)
// 2. Then it will also take 2 inputs at once, 
// product name and its category (With the dropdown containing the added categories)
// Product name will be string and category input type will be a dropdown list of the categories user-entered earlier 

// Then save the data and render the list category wise

const CreateCategory = () => {
    const productsData = [
        {
            category: "Fruit",
            products: ["Papaya", "Watermelon"]
        },
        {
            category: "Vegetable",
            products: ["Ladyfinger", "Brinjal"]
        }
    ];
    const [category, setCategory] = useState(["Fruit", "Vegetable", "lokesh"]);
    const [products, setProducts] = useState(productsData);

    const [categoryInput, setCategoryInput] = useState();
    const [productInput, setProductInput] = useState("");
    const [selectCategory, setSelectCategory] = useState("");

    const addCategory = () => {
        setCategory((prev) => prev.concat(categoryInput))
        // setCategory((prev) => [...prev, categoryInput])
        setCategoryInput('')
        console.log(category)
    }
    const addProduct = () => {
        const updatedProducts = products.map((product) => product.category === selectCategory ? { ...product, products: [...product.products, productInput] } : product)

        setProducts(updatedProducts)
        setProductInput('')
    }
    return (
        <div>
            <h1>Add Data</h1>
            <input type="text" value={categoryInput} onChange={(event) => setCategoryInput(event.target.value)} placeholder="Add category here" />
            <button onClick={addCategory}>Add Category</button>
            <div>
                <input type="text" value={productInput} onChange={(event) => setProductInput(event.target.value)} placeholder="Add product here" />
                <label>
                    Select category
                    <select value={selectCategory} onChange={(event) => setSelectCategory(event.target.value)}>
                        {
                            category.map((item) => (
                                <option key={item} value={item} >{item} </option>
                            ))
                        }
                    </select>
                </label>
                <button onClick={addProduct}>Add Product</button>
            </div>
            <ul>
                <h1>All Products</h1>
                {products?.map((product) => (
                    <li key={product.id}>
                        <h3> {product.category} </h3>
                        {product.products.map((item) => (
                            <p key={item}>{item} </p>
                        ))}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default CreateCategory