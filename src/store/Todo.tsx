import { makeAutoObservable } from "mobx";

export type TodoType = {
    id: number;
    title: string;
    completed: boolean;
}

class Todo {
    tasks: TodoType[] = [
        // {id:1, title: '', completed: false}, {id:2, title: '', completed: false}, {id:3, title: '', completed: false}
    ]

    tasksForFilter: TodoType[] = []

    constructor(){
        makeAutoObservable(this)
    }

    addTask(task: TodoType){
        this.tasks.push(task)
        this.tasksForFilter.push(task)
    }

    deleteTask(id: number){
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.tasksForFilter = this.tasksForFilter.filter(task => task.id !== id)
    }

    completeTask(taskId: number, isCompleted: boolean){
        this.tasks = this.tasks.map(task => task.id === taskId ? {...task, completed: isCompleted} : task)
        this.tasksForFilter = this.tasksForFilter.map(task => task.id === taskId ? {...task, completed: isCompleted} : task)
    }

    showCompletedTasks(){
        this.tasks = this.tasksForFilter.filter(task => task.completed)
    }

    showUncompletedTasks(){
        this.tasks = this.tasksForFilter.filter(task => !task.completed)
    }

    showAllTasks(){
        this.tasks = this.tasksForFilter
    }
}

export default new Todo();