import { Project } from "./project-class.js";

//Create array with all the projects to later export to index.js
let projectList = [];

//Function to add event listener to project button
export function addEventListenerProject() {
    const dialog = document.getElementById("favDialog");
    const projectCancelButton = document.getElementById("projectCancelButton");
    const projectSubmitButton = document.getElementById("projectSubmitButton");

    document.getElementById("newProject").addEventListener("click", () => {dialog.showModal()});

    projectSubmitButton.addEventListener("click", getModalValue("project"));

    projectCancelButton.addEventListener("click", () => {
        dialog.close("Selection cancelled");
    });
};

function getModalValue(target) {
    if (target == "project") {
        const projectTitleInput = document.getElementById("projectTitleInput").value;
        const projectDescInput = document.getElementById("projectDescInput").value;  
        
        return dialog.returnValue = [projectTitleInput,projectDescInput];

    } else if (target == "todo") {
        const todoTitleInput = document.getElementById("todoTitleInput").value;
        const todoDescInput = document.getElementById("todoDescInput").value;
        const todoDateInput = document.getElementById("todoDateInput").value;

        return dialog.returnValue = [todoTitleInput, todoDescInput, todoDateInput];
    }
};

export {projectList}