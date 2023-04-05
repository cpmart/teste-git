const retornarMaior = function(vetor){
  let maior = vetor[0]; 
  for (let i = 1; i < vetor.length; i++) { 
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
  }
  return maior;
}
console.log("O maior é: " + maior);{
  
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
