//Operadores ariterticos: +, -, *, /, %, **, ++, -- 
//Operadores de asignacion: =, +=, -=, *=, /=, %=, **=
//Operadores de comparacion: ==, !=, ===, !==, >, >=, <, <=
//Operadores logicos: &&(and), ||(or), !(negacion)
//Operador ternario: condicion ? true : false

var a = 2
var a2 = 5
console.log(a == a2) //false
console.log(a != a2) //true

var a3 = 3 //number
var a4 = '3' //string
console.log(a3 == a4) //true, compara el valor

var a5 = 3 //number
var a6 = '3' //string
console.log(a5 === a6) //false, compara el valor y el tipo de dato

var v = true
var f = false
console.log(v && f)
console.log(v || f)
console.log(!v)

var edad = 19
var res = edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad")
console.log(res)