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

        dialog.close(createTodo(todoTitleInput, todoDescInput));
    });
    //Add click listener for cancel button
    document.getElementById("todoCancelButton").addEventListener("click", () => {
        dialog.close()
    });
};

function createTodo(title, description) {
    
    let projectIndex = 0;

    for (let i = 0; i < projectList.length; i++) {
        if (projectList[i].active == true ) {
            projectIndex = i;
        }
    }

    projectList[projectIndex].newTodo(title, description, "19.11.2025 13:08");


    writeToDOM(projectList, projectIndex);
    addEventlistenerDelete();
    addEventListenerSelect();
}