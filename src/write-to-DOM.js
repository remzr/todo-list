export function writeToDOM(arg){
    console.log("Writing to DOM " + arg.active);
    //Empty all existing projects from view
    let projectContainer = document.getElementById("project-list");
    while (projectContainer.firstChild.id != "newProject") {
        projectContainer.removeChild(projectContainer.firstChild);
    }

    //Add projects from updated projectlist to DOM
    for (let i = 0; i < arg.length; i++) {
    
        //Swap class based on project state
        let stateTracker = false;
        if (arg[i].active == true) {
            stateTracker = "selected"
        } else {
            stateTracker = ""
        }
        //Create project HTML
        const newProjectElement = `
            <li name="${i}" class=${stateTracker}>
                <p value="${i}">Project ${i+1}</p>
                <h2 value="${i}">${arg[i].title}</h2>
                <p value="${i}">${arg[i].description}</p>
                <button value="${i}" class="delete-button">Delete</button>
            </li>`;
            projectContainer.insertAdjacentHTML("afterbegin", newProjectElement);
    }
    
    //If project contains todos, update them in the DOM
    if (arg[0].todos != "") {
        //Empty all existing todos from view
        let todoContainer = document.getElementById("content-main");
        while (todoContainer.firstChild != "") {
            todoContainer.removeChild(todoContainer.firstChild);
        }

    };
};