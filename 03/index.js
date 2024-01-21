const numeros = [54, 22, 14, 87, 284];

let posicao = 0

let indice = -1

for (let item of numeros) {
    if (item === 10) {
        indice = posicao
        break
    }
    posicao += 1
}
console.log(indice)