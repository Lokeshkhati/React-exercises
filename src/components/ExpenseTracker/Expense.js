import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
export const categories = ['Groceries', 'Utilities', 'Entertainment']
const Expense = () => {

    const [expenses, setExpenses] = useState([{
        id: 1,
        description: 'Milk',
        amount: 10,
        category: 'Groceries'
    }])
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedCategory2, setSelectedCategory2] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const filteredExpense = selectedCategory2 ? expenses.filter((expense) => expense.category === selectedCategory2) : expenses

    const searchedExpense = filteredExpense.filter((expense) => expense.description.toLowerCase().includes(searchTerm.toLowerCase()))


    return (
        <>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <ExpenseForm
                description={description}
                setDescription={setDescription}
                amount={amount}
                setAmount={setAmount}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                expenses={expenses}
                setExpenses={setExpenses} />

            <ExpenseFilter setSelectedCategory2={setSelectedCategory2} />

            {selectedCategory2}
            <ExpenseList expenses={searchedExpense} />
        </>
    )
}
export default Expense