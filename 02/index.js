const letras = ["A", "a", "B", "C", "E", "e"];

let encontrado = false

for (let letra of letras) {
    if (letra === 'e' || letra === 'E') {
        console.log('Foram encontradas 2 letras ', 'E', ' ou ', 'e', '.')
        encontrado = true
        break
    }
}
if (!encontrado) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
}