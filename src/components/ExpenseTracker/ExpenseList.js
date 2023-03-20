const ExpenseList = ({ expenses }) => {
    return (
        <div>{expenses.map((expense) => (
            <div key={expense.id} style={{ border: '1px solid black' }}>
                <h2> {expense.description} </h2>
                <h3> {expense.amount} </h3>
                <h4> {expense.category} </h4>
            </div>
        ))
        } </div>
    )
}
export default ExpenseList