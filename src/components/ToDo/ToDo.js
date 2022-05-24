import { useState } from 'react'
import Footer from './Footer'
import Form from './Form'
import List from './List'

function ToDo() {
    const [todos, setTodos] = useState([])
    const [hide, setHide] = useState("All")
    return (
        <div>
            <section className="todoapp">
                <Form todos={todos} setTodos={setTodos} />
                <List todos={todos} setTodos={setTodos} hide={hide} />
                <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
            </section>
        </div>
    )
}

export default ToDo