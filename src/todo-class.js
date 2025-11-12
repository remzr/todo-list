export class Todo {
    creationDate;
    done = 0;

    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.type = "Todo";
    }
}