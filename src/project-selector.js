export function projectSelector(EventTarget) {
    console.log(EventTarget);
}

export function addEventListenerSelect() {
    console.log("Add project selection listeners");
    
    let projectContainer = document.querySelectorAll("#project-list>li");
    let projectContainerArray = [...projectContainer];
      
    projectContainerArray.forEach((element) => {
        element.addEventListener("click", function() {
            projectSelector(event.target.value);
        });
    });
};