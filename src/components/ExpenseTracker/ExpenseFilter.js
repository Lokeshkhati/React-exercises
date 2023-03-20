import { categories } from "./Expense"

const ExpenseFilter = ({ setSelectedCategory2 }) => {
    return (
        <select onChange={(event) => setSelectedCategory2(event.target.value)}>
            <option value="">All categories</option>
            {categories.map((category) => (
                <option key={category} value={category} >{category} </option>))}
        </select>
    )
}
export default ExpenseFilter