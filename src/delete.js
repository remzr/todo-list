export function deleteObject(EventTarget) {
    console.log(EventTarget);
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
                deleteObject(EventTarget);
            });
        });
    };
};