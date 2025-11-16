import { projectListLoader } from "./project-handler";

export function deleteObject(EventTarget) {    
    projectListLoader(EventTarget, "delete");
}

export function addEventlistenerDelete() {
    let projectContainer = document.getElementById("project-list");

    if (projectContainer.firstElementChild.id != "newProject") {
    
        let buttons = document.querySelectorAll(".delete-button");
        let buttonsArray = [...buttons];

        console.log(buttons);
        console.log(buttonsArray);

        buttonsArray.forEach((element) => {
            element.addEventListener("click", function() {
                deleteObject(event.target.value);
            });
        });
    };
};