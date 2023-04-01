const retornarMaior = function(vetor){

}
const retornarMenor = function(vetor){

}
const retornarMedia = function(vetor){

}
const retornarOrdenarCrescente = function(vetor){

}
const retornarOrdenarDecrescente = function(vetor){
    vetor.sort(function(a,b){
        return b-a;
    });
    return vetor;

}
const vetorOrdenado = retornarOrdenarDecrescente(vetor);

console.log(vetorOrdenado);
