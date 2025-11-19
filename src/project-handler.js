import { Project } from "./project-class.js";
import { writeToDOM } from "./write-to-DOM.js";
import { addEventlistenerDelete } from "./delete.js";
import { addEventListenerSelect } from "./project-selector.js";

//Create array with all the projects to later export to index.js
let projectList = [];

export function projectListLoader(item, method) {
    if (method == "delete") {
        projectList.splice(item, 1);
        
    if (typeof activeProjectIndex === "undefined") {
        let activeProjectIndex = 0;
    } else {
        activeProjectIndex = 0;
    }

        writeToDOM(projectList);
        addEventlistenerDelete();
        addEventListenerSelect();
    }
};

//Updates project state
export function projectSelector(item) {
    //Make selected project active
let activeProjectIndex = 0;

    for (let i = 0; i < projectList.length; i++) {
        if (i == item) {
                projectList[i].active = true;
                activeProjectIndex = i;
                console.log(`Project ${activeProjectIndex} is selected!`)
        } else {
                projectList[i].active = false;
        }
    }
    writeToDOM(projectList, activeProjectIndex);
    addEventlistenerDelete();
    addEventListenerSelect();   
}

//Add event listeners for project related buttons
export function addEventListenerProject() {
    const dialog = document.getElementById("projectModal");

    //Add click listener to newProject button to open modal
    document.getElementById("newProject").addEventListener("click", () => {
        dialog.showModal();
    });
    //Add click listener to submit button, get input values, prevent default behaviour for now and call
    //CreateProject function with dialog.close method.
    document.getElementById("projectSubmitButton").addEventListener("click", (event) => {
        event.preventDefault();
        
        const projectTitleInput = document.getElementById("projectTitleInput").value;
        const projectDescInput = document.getElementById("projectDescInput").value;

        dialog.close(createProject(projectTitleInput, projectDescInput));
    });
    //Add click listener for cancel button
    document.getElementById("projectCancelButton").addEventListener("click", () => {
        dialog.close()
    });
};

//Is called by submit button, creates a new project with class, pushes it to projectlist and calls
//write to DOM function
function createProject(title, description) {

    let project = new Project(title, description);
    projectList.push(project);

    if (projectList.length == 1) {
        project.active = true;
    }

    writeToDOM(projectList);
    addEventlistenerDelete();
    addEventListenerSelect();
}

export {projectList}