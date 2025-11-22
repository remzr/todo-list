export function saveToStorage(savedObject) {
    localStorage.setItem("projectList", JSON.stringify(savedObject));
}

export function loadProjectList() {
    return JSON.parse(localStorage.getItem("projectList"));
}