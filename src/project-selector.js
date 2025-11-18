export function projectSelector(EventTarget) {
    
}

export function addEventListenerSelect() {
    let projectContainer = document.querySelectorAll("#project-list>li");
    let projectContainerArray = [...projectContainer];
      
    projectContainerArray.forEach((element) => {
        element.addEventListener("click", function() {
            projectSelector(event.target.value);
        });
    });
};