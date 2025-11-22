import { projectListLoader } from "./project-handler";

export function addEventlistenerDelete() {
    
    let projectContainer = document.getElementById("project-list");
 
    //Check if projects exist
    if (projectContainer.firstElementChild.id != "newProject" || projectContainer.firstElementChild != "") {
    
        let buttons = document.querySelectorAll(".delete-button");
        let buttonsArray = [...buttons];

        buttonsArray.forEach((element) => {
            element.addEventListener("click", function() {
                projectListLoader(event.target.value, event.target.name);
            });
        });
    } else {
        throw "No projects to add a delete button existing."
    }
};