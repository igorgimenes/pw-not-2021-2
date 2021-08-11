// forma é um paramentro opicional, sendo assim não precisa ser informado na chamada da função
//caso tenha sido omitido, assumirá valor 'R'.
function areaForma(base, altura = base, forma = 'R') {
    let area
    switch (forma) {
        case 'R': //Retangulo
            area = base * altura
            break
        case'T': //Triangulo
            area = base * altura/2
            break
        case 'E': //Elipse
            area = (base/2) * (altura/2) * Math.PI
    }
    return area
}

console.log(`Retangulo 45x15: ${areaForma(45, 15, 'R')}`)
console.log(`Triangulo 13x8: ${areaForma(13, 8, 'T')}`)
console.log(`Elipse 12x16: ${areaForma(12, 16, 'E')}`)
console.log(`Quadrado 4: ${areaForma(4)}`)