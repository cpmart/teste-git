
const vetor = [5, 50, 40, 30, 10, 2, -20, -2];
const handleFunctionVisibility = (functionIndex) => {
    const functionElements = [...document.getElementsByClassName("function")]
    const selectedFunction = functionElements[functionIndex];

    functionElements.map(element => {
        if (element.classList.contains("visible")) {
            element.classList.remove("visible");
        }
        return element;
    })

    if (selectedFunction.classList.contains("visible"))
        return;
    else
        selectedFunction.classList.add("visible");

    document.getElementById('maior').innerHTML = retornarMaior(vetor);
    document.getElementById('menor').innerHTML = retornarMenor(vetor);
    document.getElementById('media').innerHTML = retornarMedia(vetor);
    document.getElementById('crescente').innerHTML = retornarOrdenarCrescente(vetor);
    document.getElementById('decrescente').innerHTML = retornarOrdenarDecrescente(vetor);

}