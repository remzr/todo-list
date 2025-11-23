import { projectList } from "./project-handler";
import { writeToDOM } from "./write-to-DOM";
import { addEventlistenerDelete } from "./delete";
import { addEventListenerSelect } from "./project-selector";

export function addEventListenerTodo() {
    const dialog = document.getElementById("todoModal");

    //Add click listener to newTodo button to open modal
    document.getElementById("newTodo").addEventListener("click", () => {
        dialog.showModal();
    });
    //Add click listener to submit button, get input values, prevent default behaviour for now and call
    //CreateProject function with dialog.close method.
    document.getElementById("todoSubmitButton").addEventListener("click", (event) => {
        event.preventDefault();
        
        const todoTitleInput = document.getElementById("todoTitleInput").value;
        const todoDescInput = document.getElementById("todoDescInput").value;
        const todoDuetimeInput = document.getElementById("todoDueTime").value;

        dialog.close(createTodo(todoTitleInput, todoDescInput, todoDuetimeInput));
    });
    //Add click listener for cancel button
    document.getElementById("todoCancelButton").addEventListener("click", () => {
        dialog.close()
    });
};

export function createTodo(title, description, dueDate, indexProject) {
    
    //Fallback for falsy data input
    if (title == undefined || title == "") {
        title = "New Todo"
    }
    if (description == undefined || description == "") {
        description = "Description"
    }
    if (dueDate == undefined || dueDate == "") {
        dueDate = "2025-12-15T12:30";
    }
    
    let projectIndex = 0;

    if (indexProject != "" && indexProject != undefined) {
        projectIndex = indexProject;
    } else {
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].active == true ) {
                projectIndex = i;
            }
        }
    };

    projectList[projectIndex].newTodo(title, description, dueDate);


    writeToDOM(projectList, projectIndex);
    addEventlistenerDelete();
    addEventListenerSelect();
}