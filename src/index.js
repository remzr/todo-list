import "./styles.css";
import { addEventListenerProject, projectList } from "./project-handler.js";
import { addEventListenerTodo } from "./todo-handler.js";

//Load event listener for new project on start
addEventListenerProject();
addEventListenerTodo();

//Hide +Add Todo Button on load, until a project is added
export function todoButtonState() {
    if (projectList.length < 1) {
        document.getElementById("newTodo").style.display = "none";
    } else {
        document.getElementById("newTodo").style.display = "block";
    }
};

todoButtonState()