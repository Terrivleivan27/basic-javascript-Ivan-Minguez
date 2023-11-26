const scanner = require("prompt-sync")({sigint: true })

let años = scanner("Introduce tu edad => ")

if (años > 18){ 
    console.log("Ya puedes conducir")
} else {
    console.log("No puedes conducir")
}