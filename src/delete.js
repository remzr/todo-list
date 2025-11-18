import { projectListLoader } from "./project-handler";

export function deleteObject(EventTarget) {    
    projectListLoader(EventTarget, "delete");
}

export function addEventlistenerDelete() {
    let projectContainer = document.getElementById("project-list");

    //Check if projects exist
    if (projectContainer.firstElementChild.id != "newProject") {
    
        let buttons = document.querySelectorAll(".delete-button");
        let buttonsArray = [...buttons];

        buttonsArray.forEach((element) => {
            element.addEventListener("click", function() {
                deleteObject(event.target.value);
            });
        });
    } else {
        throw "No projects to add a delete button existing."
    }
};