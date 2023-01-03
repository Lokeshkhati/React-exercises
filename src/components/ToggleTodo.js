// Add Todos on click of submit button. On clicking any of the todos, it has to be marked. i.e -> completed todos become incomplete and vice versa. 


import { useState } from 'react'
const ToggleTodo = () => {
    const todosData = [
        {
            id: 1,
            title: "NeoG assignments",
            completed: false
        },
        {
            id: 2,
            title: "Pair programming session",
            completed: true
        },
        {
            id: 3,
            title: "Project submission",
            completed: false
        },
        {
            id: 4,
            title: "Coding practice",
            completed: true
        }
    ]
    const [todos, setTodos] = useState(todosData)

    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos((todos) =>
            todos.concat({ title: todo, completed: false, id: Math.random() })
        );
        setTodo("");
    };
    const markTodo = (id) => {
        const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button onClick={submitHandler}> Add </button>
            </form>
            <ul>
                {todos.map((item) => (
                    <li style={{ border: "1px solid black", margin: "1rem", }} key={item.id} onClick={() => markTodo(item.id)}>
                        <h2> Title :    {item.title}</h2>
                        <p> completed : {item.completed ? "✅" : "❌"} </p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default ToggleTodo