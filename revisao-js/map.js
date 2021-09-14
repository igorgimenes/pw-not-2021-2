const   frutas = ['banana', 'maçã', 'uva', 'pera', 'morango', 'laranja']

// gere um veotr que contenha todos os elementos do vetor
// frutas, mas em MAISCULAS

let frutas2 = []

for(let f of frutas) {
    frutas2.push(f.toUpperCase())
}

console.log(frutas2)

let frutas3 = frutas.map(elemento => elemento.toUpperCase())

console.log(frutas3)

let nums = [2, 3, 4 ,5, 6, 7, 8, 9]

let quadrados = nums.map(n => n ** 2)
console.log(quadrados)

let itensFrutas = frutas.map(f => '<li>' + f + '</li>')
console.log(itensFrutas)