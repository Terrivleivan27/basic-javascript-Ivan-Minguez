const scanner = require("prompt-sync")({sigint: true })

let nota = scanner("Introduce tu nota => ")

if (nota < 3){ 
    console.log("Muy deficiente")
}

if (nota > 3 && nota < 5){ 
    console.log("Insuficiente")
}

if (nota >=  5 && nota < 6){ 
    console.log("Suficiente")
}

if (nota >= 6 && nota < 7){ 
    console.log("Bien")
}

if (nota >= 7 && nota < 9){ 
    console.log("Notable")
}

if (nota >= 9 && nota < 10){ 
    console.log("Sobresaliente")
}