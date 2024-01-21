const original = [1, 4, 12, 21, 53, 88, 112, 116, 117, 120];

let ArrayTratado = []

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        ArrayTratado.push(original[i])

    }
}
console.log(ArrayTratado)