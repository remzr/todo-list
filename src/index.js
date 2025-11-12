import "./styles.css";
import { Project } from "./project.js";
import {addEventListenerProject} from "./event-listeners.js";

//Load event listener for new project on start
addEventListenerProject();

const testProject = new Project("Workout", "Routine");

console.log(testProject.title);
console.log(testProject.todos)

testProject.newTodo("Squats","12 Reps","Tomorrow");
testProject.newTodo("Pushus","10 Reps","Tomorrow");
testProject.newTodo("Pullups","1 Rep","Today");

console.log(testProject.todos)