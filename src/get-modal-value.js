export function getModalValue(target) {
    if (target == "project") {
        const projectTitleInput = document.getElementById("projectTitleInput").value;
        const projectDescInput = document.getElementById("projectDescInput").value;
             
        return [projectTitleInput,projectDescInput];

    } else if (target == "todo") {
        const todoTitleInput = document.getElementById("todoTitleInput").value;
        const todoDescInput = document.getElementById("todoDescInput").value;
        const todoDateInput = document.getElementById("todoDateInput").value;

        return [todoTitleInput, todoDescInput, todoDateInput];
    }
};