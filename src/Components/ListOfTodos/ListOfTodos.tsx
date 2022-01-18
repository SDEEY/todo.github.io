import Todo, {TodoType} from "../../store/Todo";
import {observer} from "mobx-react-lite";
import s from './ListOfTodos.module.scss'

const ListOfTodos = observer(() => {
    return (
        <div className={s.listOfTodos}>
            {Todo.tasks.map((task: TodoType) =>
                <div key={task.id}>
                    {`${task.id} ${task.title} `}
                    <input onChange={(e) => Todo.completeTask(task.id, e.target.checked)} type="checkbox" />
                    <button onClick={() => Todo.deleteTask(task.id)}>delete</button>
                </div>
            )}
        </div>
    );
}
)

export default ListOfTodos;