import { categories } from "./Expense"

const ExpenseForm = ({ description, setDescription, amount, setAmount, selectedCategory, setSelectedCategory, expenses, setExpenses }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const newExpense = {
            id: Math.random() * 1000,
            description, amount, category: selectedCategory
        }

        setExpenses([newExpense, ...expenses])
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="description">
                    Description
                </label>
                <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
            </div>
            <div>
                <label htmlFor="amount">
                    Amount
                </label>
                <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
            </div>
            <div>
                <label htmlFor="amount">Category </label>
                <select onChange={(event) => setSelectedCategory(event.target.value)} >
                    <option value=""></option>
                    {categories.map((category) => (
                        <option key={category} value={category} >{category} </option>))}
                </select>
            </div>

            <button>Submit</button>
        </form>
    )
}
export default ExpenseForm