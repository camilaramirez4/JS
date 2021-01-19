var numero1 = 50 //true
var numero2 = 50.23445655 //false
var res1 = Number.isInteger(numero1) //nos dice si el numero es un entero
var res2 = Number.parseInt(numero2) //convierte la variable a un numero entero
var res3 = Number.parseFloat(numero2).toFixed(3) //paseFloat reduce un string a decima.toFixed reduce la cantidad de decimales, le pasamos la cantidad de decimales que queremos

console.log(res1)
console.log(res2)
console.log(res3)