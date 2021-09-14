const nums = [31, 42, 16, 12, 23, 9, 28, 33, 36]

// Gerar um segundo vetor contendo apenas os números PARES
// do vetor nums

const pares = []

for(let n of nums) {
  if(n % 2 === 0) pares.push(n)
}
console.log(pares)

const pares2 = nums.filter(n => n % 2 === 0)
console.log(pares2)



