//Son un conjunto de sentencias que realizan una tarea
function saludo(){
    console.log("Hola a todos")
}
saludo()

function miSuma(a,b,c){
    let resultado = a + b + c
    console.log(resultado)
}
miSuma(3,2,1)

function miResta(a,b){
    return a - b
}
console.log(miResta(3,2))

var miMultiplicacion = function(a,b){
    return a * b
}
var a1 = 3
var b1 = 2
console.log(miMultiplicacion(a1,b1))