//função tradicional com 1 paramentro e 1 linha de codigo no corpo, com return
function quadrado(x) {
    return x * x
}

//arrow function equivalente
//1- a função deve ser atribuida a uma variavel (ou melhor, a uma constatnte)
//2- desaparece a palavra-chave 'function'
//3- desaparecem os parenteses em torno do paramentro
//4- apos o parametro, aparece o simbolo => (flecha, arrow)
//5- desaparecem as chaves em torno do corpo da função
//6- desaparece a falavra-chave 'return'
const quadrado2 = x => x * x

console.log(quadrado(9))
console.log(quadrado2(9))

console.log('----------------------------------')

//função tradicional com 2 argumentos, 1 linha de corpo com return
function potencia(base, expoente) {
    return base ** expoente
}

//arrow function correspondente
// retornam os parenteses em torno dos argumentos
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(3,5))
console.log(potencia2(3,5))