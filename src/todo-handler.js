import { projectList } from "./project-handler";

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
    
    projectList.forEach(()=> {
        if (this.active == true) {
            let projectIndex = 
        }
    })
}