import { createProject } from "./project-handler";
import { createTodo } from "./todo-handler";

export function saveToStorage(savedObject) {
    localStorage.setItem("projectList", JSON.stringify([savedObject]));
}

export function loadProjectList() {
    let loadedProjects = JSON.parse(localStorage.getItem("projectList"));
    let projectTitle = [];
    let projectDescription = [];
    
    console.log(loadedProjects);

    //Create Projects and Todos with paramters from local storage
    if (loadedProjects != "" && loadedProjects != null) {

        for (let i = 0; i < loadedProjects[0].length; i++) {

            projectTitle = loadedProjects[0][i].title;
            projectDescription = loadedProjects[0][i].description;

            createProject(projectTitle,projectDescription);
            for (let j = 0; j < loadedProjects[0][i].todos.length; j++) {
                createTodo(loadedProjects[0][i].todos[j].title, loadedProjects[0][i].todos[j].description, loadedProjects[0][i].todos[j].dueDate)
            }
        }
        return loadedProjects;
    }
};