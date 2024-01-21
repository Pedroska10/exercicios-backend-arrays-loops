const numeros = [3, 4, 1, 8, 11, 7, 5];

//percorrer o Array
//verificar conteudo de cada índice afim de ver qual tem o maior valor e imprimir o mesmo

let maiorAteagora = numeros[0]
for (let maior of numeros) {
    if (maior > maiorAteagora) {
        maiorAteagora = maior
    }
}
console.log(maiorAteagora)