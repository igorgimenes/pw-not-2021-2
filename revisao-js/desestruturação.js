// Vetor
let carros = ['Celta', 'Uno', 'Gol']

// Deses =truturação total do vetor
let [a, b, c] = carros

console.log(a)
console.log(b)
console.log(c)

// Desestruturação parcial
let [m, n] = carros

console.log('----------------------------')

console.log(m)
console.log(n)

let [x, , z] = carros

console.log('----------------------------')

console.log(x)
console.log(z)

// Objeto
let veiculo = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    cor: 'Preto',
    ano: 1969
}

// Desestruturação total de um objeto
// 1ª regra: as variaveis devem ter o mesmo nome das prpriedades
// 2ª regra: a ordem nao importa

let { cor, modelo, ano, marca} = veiculo

console.log('----------------------------')

console.log(marca)
console.log(modelo)
console.log(cor)
console.log(ano)

// Para fazer a desestruturação parcial de objeto, basta criar variáveis
// correspondentes apenas às propriedas de interesse.

