/*******************************************************************
 * Objetivo: Criar um sistema que inverta os caracteres de um string
 * Data: 09/03/24
 * Autor: Cleiton
 ******************************************************************/

var readline = require('readline')

const inverterString = function (palavra){
    let string = ''

    for (let indice = palavra.length -1; indice >=0; indice--){
        string += palavra[indice]
    }

    return string;
}

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('*******************INVERTER*******************')
console.log('\n')
entradaDados.question('Por favor, informe a palavra: \n', function(entrada) {

    let resultado = inverterString(entrada)

    console.log(`A palavra "${entrada} com os caracteres invertidos fica assim:"\n`)
    console.log(resultado)
    console.log('\nPressione ctrl + c para fechar o sistema');

})