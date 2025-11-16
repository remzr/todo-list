export function writeToDOM(arg, mode){
    if (mode == "projects") {
        //Empty all existing projects
        let projectContainer = document.getElementById("project-list");
        while (projectContainer.firstChild.id != "newProject") {
            projectContainer.removeChild(projectContainer.firstChild);
        }

        //Add projects from updated projectlist to DOM
        for (let i = 0; i < arg.length; i++) {
            const newProjectElement = `
                <li name="${i}">
                    <p>Project ${i+1}</p>
                    <h2>${arg[i].title}</h2>
                    <p>${arg[i].description}</p>
                    <button value="${i}" class="delete-button">Delete</button>
                </li>`;
                projectContainer.insertAdjacentHTML("afterbegin", newProjectElement);
        }        
    }
}

