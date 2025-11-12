import { getModalValue } from "./get-modal-value.js";
import { Project } from "./project-class.js";

//Create array with all the projects to later export to index.js
let projectList = [];

//Add event listeners
export function addEventListenerProject() {
    const dialog = document.getElementById("favDialog");

    document.getElementById("newProject").addEventListener("click", () => {
        dialog.showModal()
    });
    document.getElementById("projectSubmitButton").addEventListener("click", 
        document.dialog.submit()
    );
    document.getElementById("projectCancelButton").addEventListener("click", () => { 
        dialog.close("Selection cancelled");
    });
};

function createProject() {
    let values = getModalValue("project");

    let newProject = new Project(values[0], values[1]);
    console.log(newProject);
    return newProject;
}

export {projectList}