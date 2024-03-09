/*******************************************************************
 * Objetivo: Criar um sistema que após receber um número
 * ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 * Data: 09/03/24
 * Autor: Cleiton
 ******************************************************************/

var readline = require('readline')

const fibonacci = function(numero){
    let inicio = 1
    let fim = 0
    let indice
    let resultado = false

    while(fim < numero){
        indice = fim
        fim = fim + inicio
        inicio = indice

        if(fim == numero){
            resultado = true
        }
    }

    return resultado
}

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('*******************FIBONACCI*******************')
console.log('\n')
entradaDados.question('Por favor, informe o número: \n', function(entrada) {

    let resultado = fibonacci(entrada)

    if(resultado == true){
        console.log(`O número ${entrada} pertence à sequência de Fibonacci \n`)
        console.log('Pressione ctrl + c para fechar o sistema');
    }else{
        console.log(`O número ${entrada} não pertence à sequência de Fibonacci \n`)
        console.log('Pressione ctrl + c para fechar o sistema');
    }
})