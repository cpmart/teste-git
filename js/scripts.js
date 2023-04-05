const retornarMaior = function(vetor){
    let aux = 0;
    for (let index = 0; index < vetor.length; index++) {
        
        if (vetor[index] > aux){
            aux = vetor[index];
        }
        
    }
    return aux;
}
const retornarMenor = function(vetor){
    let menor = vetor[0];
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor){
            menor = vetor[i];
        }
    }
    return menor;
}
const retornarMedia = function(vetor){

}
const retornarOrdenarCrescente = function(vetor){

}
const retornarOrdenarDecrescente = function(vetor){

}
