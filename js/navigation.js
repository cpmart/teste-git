const handleFunctionVisibility = (functionIndex) => {
    const functionElements = [...document.getElementsByClassName("function")]
    const selectedFunction = functionElements[functionIndex];

    functionElements.map(element => {
        if(element.classList.contains("visible")) {
            element.classList.remove("visible");
        }
        return element;
    })

    if(selectedFunction.classList.contains("visible"))
        return;
    else
        selectedFunction.classList.add("visible");
}