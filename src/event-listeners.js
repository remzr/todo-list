//New Project Event listener
export function addEventListenerProject() {
    const dialog = document.getElementById("favDialog");
    const projectCancelButton = document.getElementById("projectCancelButton");
    const projectSubmitButton = document.getElementById("projectSubmitButton");


    document.getElementById("newProject").addEventListener("click", () => {dialog.showModal()});

    projectSubmitButton.addEventListener("click", () => {
        const projectTitleInput = document.getElementById("projectTitleInput").value;
        const projectDescInput = document.getElementById("projectDescInput").value;  
        
        dialog.returnValue = [projectTitleInput,projectDescInput];
        
        dialog.close(dialog.returnValue);
        console.log(dialog.returnValue);
    });

    projectCancelButton.addEventListener("click", () => {
        dialog.close("animalNotChosen");
    });
};