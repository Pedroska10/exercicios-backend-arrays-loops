const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let novoArray = []

for (let nome of nomes) {
    const inicial = nome[0]

    if (inicial === 'A' || inicial === 'a') {
        novoArray.push(nome)
    }
}
console.log(novoArray)