import { createProject } from "./project-handler";
import { createTodo } from "./todo-handler";

export function saveToStorage(savedObject) {
    localStorage.setItem("projectList", JSON.stringify(savedObject));
}

export function loadProjectList() {
    let loadedProjects = JSON.parse(localStorage.getItem("projectList"));

    //Create Projects and Todos with paramters from local storage
    if (loadedProjects != "") {

        for (let i = 0; i = loadedProjects.length; i++) {

            console.log(loadedProjects);

            createProject(loadedProjects[i].title, loadedProjects[i].description);
            for (let j = 0; j =loadedProjects[i].todos.length; j++) {
                createTodo(loadedProjects[i].todos[j].title, loadedProjects[i].todos[j].description, loadedProjects[i].todos[j].dueDate)
            }
        }
        return loadedProjects;
    }
};