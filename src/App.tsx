import {observer} from 'mobx-react-lite';
import React from 'react';
import s from './App.module.scss';
import Todo from './store/Todo';
import Form from "./Components/Form/Form";
import ListOfTodos from "./Components/ListOfTodos/ListOfTodos";

const App = observer(() => {
    return (
        <div>
            <Form />
            <div className={s.buttons}>
                <button onClick={() => Todo.showCompletedTasks()}>completed</button>
                <button onClick={() => Todo.showUncompletedTasks()}>uncompleted</button>
                <button onClick={() => Todo.showAllTasks()}>all</button>
            </div>
            <div>
                <ListOfTodos/>
            </div>
        </div>
    );
})

export default App;
