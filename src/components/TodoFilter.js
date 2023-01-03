// - Your challenge is to add a filter to do the following
//     - Show completed todos
//     - Show incomplete todos
//     - Show all todos

import { useState } from 'react'

const TodoFilter = () => {
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

    const showTodo = () => {
        setTodos(todosData)
    }
    const completedTodos = () => {
        const filteredTodos = todosData.filter((todo) => todo.completed)
        setTodos(filteredTodos)
    }
    const incompleteTodos = () => {
        const filteredTodos = todosData.filter((todo) => !todo.completed)
        setTodos(filteredTodos)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={showTodo}>Show All</button>
            <button onClick={completedTodos}>complete Todo</button>
            <button onClick={incompleteTodos}>Incomplete Todo</button>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        <h2> Title :    {item.title}</h2>
                        <p> completed : {item.completed ? "✅" : "❌"} </p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
export default TodoFilter