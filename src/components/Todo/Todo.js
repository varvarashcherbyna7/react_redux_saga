import React, {useState, useEffect} from 'react';
import Context from "../../context";
import TodoList from "./TodoList";
import Loader from "../Loader";
// import AddTodo from "./components/Todo/AddTodo";

const AddTodo = React.lazy(() => import('./AddTodo'))

function Todo() {

    const [todos, setTodos] = useState([
        // {id: 1, completed: false, title: 'buy milk'},
        // {id: 2, completed: false, title: 'buy coffee'},
        // {id: 3, completed: false, title: 'buy cake'},
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000)
            })
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    return(

        <Context.Provider value={{removeTodo}}>
                <React.Suspense fallback={<p style={{width: '85vw', margin: '1rem auto'}}>Loading....</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                {loading && <Loader/>}
                {
                    todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> :
                        loading ? null :  <p style={{margin: '3rem auto'}}>No todos!</p>
                }
        </Context.Provider>

    )
}

export default Todo;
