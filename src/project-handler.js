import { Project } from "./project-class.js";
import { writeToDOM } from "./write-to-DOM.js";
import { addEventlistenerDelete } from "./delete.js";
import { addEventListenerSelect } from "./project-selector.js";

//Create array with all the projects to later export to index.js
let projectList = [];
let activeProjectIndex = 0;

export function projectListLoader(item, itemName) {
    if (itemName == "deleteProjectItem") {
        projectList.splice(item, 1);
    }
    else if (itemName == "deleteTodoItem") {
        projectList.forEach((y) => {
            if (y.active == true) {
                //Find inxex of active project
                const isActive = (element) => element.active == true;
                const activeIndex = projectList.findIndex(isActive);
                
                projectList[activeIndex].todos.splice(item, 1);

                activeProjectIndex = activeIndex;
            }
        });
    }
        
    writeToDOM(projectList, activeProjectIndex);
    addEventlistenerDelete();
    addEventListenerSelect();
};

//Updates project state
export function projectSelector(item) {

    //Make selected project active
    for (let i = 0; i < projectList.length; i++) {
        if (i == item) {
                projectList[i].active = true;
                activeProjectIndex = i;
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
export function createProject(title, description) {

    //Fallback for falsy data input
    if (title == undefined || title == "") {
        title = "New Project"
    } else if (description == undefined || description == "") {
        description = "Description"
    }

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