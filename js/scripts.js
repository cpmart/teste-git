const retornarMaior = function(vetor){

}
const retornarMenor = function(vetor){

}
const retornarMedia = function(vetor){

}

const retornarOrdenarCrescente = function (vetor) {
    let forma = Number(prompt('Informe a forma de ordenação: \n1 - RAIZ\n2 - NUTELLA'));
    switch (forma) {
        case 1:
            /*Forma RAIZ*/
            let i, j, swap, min;
            for (i = 0; i < 7; i++) {
                min = Number(i);
                for (j = (i + 1); j < 8; j++) {
                    if (vetor[j] < vetor[min]) {
                        min = Number(j);
                    }
                }
                if (i != min) {
                    swap = Number(vetor[i]);
                    vetor[i] = Number(vetor[min]);
                    vetor[min] = Number(swap);
                }
            }
            return `<strong>${vetor}</strong>`;

        case 2: /*Forma Nutella*/
            vetor = vetor.sort((firtItem, secondItem) => firtItem - secondItem);
            return `<strong>${vetor}</strong>`;

        default: alert("Larga de ser mosca é só 1 ou 2...");
            break;
    }
}

const retornarOrdenarDecrescente = function (vetor) {

}
