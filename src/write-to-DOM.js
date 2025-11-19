import { todoButtonState } from ".";

export function writeToDOM(arg, activeProjectIndex){
    //Enable todo button if projects exist
    todoButtonState();

    console.log("Writing to DOM " + arg.active);
    //Empty all existing projects from view
    let projectContainer = document.getElementById("project-list");
    while (projectContainer.firstChild.id != "newProject") {
        projectContainer.removeChild(projectContainer.firstChild);
    }

    //Add projects from updated projectlist to DOM
    for (let i = 0; i < arg.length; i++) {
    
        //Swap class based on project state
        let stateTracker = false;
        if (arg[i].active == true) {
            stateTracker = "selected"
        } else {
            stateTracker = ""
        }
        //Create project HTML
        const newProjectElement = `
            <li name="${i}" class=${stateTracker}>
                <p value="${i}">Project ${i+1}</p>
                <h2 value="${i}">${arg[i].title}</h2>
                <p value="${i}">${arg[i].description}</p>
                <button value="${i}" class="delete-button">Delete</button>
            </li>`;
            projectContainer.insertAdjacentHTML("afterbegin", newProjectElement);
    }
    
    //Empty all existing todos from view
    let todoContainer = document.getElementById("content-main");
    while (todoContainer.firstChild.id != "newTodo") {
            todoContainer.removeChild(todoContainer.firstChild);
    };
    console.log(arg);
    //Add todos from selected project to DOM
    if (activeProjectIndex >= 0 && arg.length != 0) {
        for (let j = 0; j < arg[activeProjectIndex].todos.length; j++) {

        //Create todo HTML
        const newTodoElement = `
            <div name="${j}" id="todo-item-${j}" class="todo-item">
                <div value="${j}" class="todo-title">
                    <input type="checkbox" id="checkbox-item-1" name="item1" value="${j}">
                    <h3 value="${j}">${arg[activeProjectIndex].todos[j].title}</h3>
                </div>
                <p value="${j}">${arg[activeProjectIndex].todos[j].description}</p>
                <div value="${j}" class="todo-footer">
                    <p value="${j}">65 hours left</p>
                    <button value="${j}" id="deleteTodoItem">Delete</button>
                </div>
            </div>`;
            todoContainer.insertAdjacentHTML("afterbegin", newTodoElement);
        }
    }
};