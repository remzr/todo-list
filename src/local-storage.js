import { createProject } from "./project-handler";
import { createTodo } from "./todo-handler";

export function saveToStorage(savedObject) {
    localStorage.setItem("projectList", JSON.stringify([savedObject]));
}

export function loadProjectList() {
    let loadedProjects = JSON.parse(localStorage.getItem("projectList"));

    console.log(loadedProjects);

    //Create Projects and Todos with paramters from local storage
    if (loadedProjects != "" && loadedProjects != null) {

        for (let i = 0; i = loadedProjects.length; i++) {

            let projectTitle = loadedProjects[i].title;
            let projectDescription = loadedProjects[i].description;

            createProject(projectTitle,projectDescription);
            for (let j = 0; j =loadedProjects[i].todos.length; j++) {
                createTodo(loadedProjects[i].todos[j].title, loadedProjects[i].todos[j].description, loadedProjects[i].todos[j].dueDate)
            }
        }
        return loadedProjects;
    }
};