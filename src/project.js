import { Todo } from "./todo.js";

export class Project {
    todos = [];
    newTodo = (title, description, dueDate)=> {
        this.todos.push(new Todo(title, description, dueDate));
    };
    
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

