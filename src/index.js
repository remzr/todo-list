import "./styles.css";
import { addEventListenerProject } from "./project-handler.js";
import { addEventListenerTodo } from "./todo-handler.js";

//Load event listener for new project on start
addEventListenerProject();
addEventListenerTodo();