import {useState,useEffect} from 'react'

function Form({todos, setTodos}) {

    const [form, setForm] = useState("");

    useEffect(() => {
        setForm("")
    },[todos]);

    const onChangeInput = (e) => {
        setForm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form === "") {
            return false;
          }
      
          setTodos([
            ...todos,
            {
              id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
              todo: form,
              checked: false,
            },
          ]);
    };

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input className="new-todo" 
                    placeholder="What needs to be done?" 
                    onChange={onChangeInput}
                    value={form}
                    autoFocus
                    />
                </form>
            </header>
        </div>
    )
}

export default Form;