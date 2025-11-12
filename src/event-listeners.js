import { newModal } from "./modal.js";

//New Project Event listener
export function addEventListenerProject() {
    document.getElementById("newProject").addEventListener("click", newModal);
};