const input = require("prompt-sync")({sigint: true })

let cancelar=false
let frase
let sumar=''

while (!cancelar) {
    frase = input('Escribe una frase;')

    if (frase === 'cancelar') {
        cancelar = true
    } else{
        sumar += frase +'-'
    }
}


console.log(sumar)
