import React, {useState} from 'react';
import s from './Form.module.scss'
import Todo from "../../store/Todo";

const Form = () => {
    const [inputValue, setInputValue] = useState('')

    const submitHandler = (e: any) => {
        e.preventDefault()

        if(!inputValue) return

        const title = e.target[0].value

        Todo.addTask({id: Todo.tasks.length + 1, title: title, completed: false})
        setInputValue('')
    }

    return (
        <form className={s.form} onSubmit={submitHandler}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text"/>
            <button>add</button>
        </form>
    );
};

export default Form;