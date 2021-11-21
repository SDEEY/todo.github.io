import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import Todo, {TodoType} from './store/Todo';

const App = observer( () => {
  const submitHandler = (e: any) => {
    e.preventDefault()
    
    const title = e.target[0].value
    Todo.addTask({id: Todo.tasks.length + 1, title: title, completed: false})
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text"/>
        <button>add</button>
      </form>
      <button onClick={() => Todo.showCompletedTasks()}>completed</button>
      <button onClick={() => Todo.showUncompletedTasks()}>uncompleted</button>
      <button onClick={() => Todo.showAllTasks()}>all</button>
      <div className="App">
      {Todo.tasks.map((task: TodoType) => 
        <div key={task.id}>
          {`${task.id} ${task.title} `}
          <input onChange={(e) => Todo.completeTask(task.id, e.target.checked)} type="checkbox" />
          <button onClick={() => Todo.deleteTask(task.id)}>delete</button>
        </div>
      )}
    </div>
    </div>
  );
}
)

export default App;
