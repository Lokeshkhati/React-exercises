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
        },
        {
            category: "lokesh",
            products: ["Ladyfinger", "Brinjal"]
        }
    ];

    const categories = productsData.map((product) => product.category)

    const [data, setData] = useState(productsData);
    const [category, setCategory] = useState(categories);
    const [categoryInput, setCategoryInput] = useState();
    const [productInput, setProductInput] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    
    const addCategory = () => {

        setData([...data, {
            category: categoryInput,
            products: []
        }])

        setCategoryInput('')
    }
    const addProduct = () => {
        const newData = [...data, {
            category: selectCategory,
            products: [productInput]
        }]
        setData(newData)
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
                {data?.map((item) => (
                    <li key={item.id}>
                        <h3> {item.category} </h3>
                        {item.products.map((item) => (
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