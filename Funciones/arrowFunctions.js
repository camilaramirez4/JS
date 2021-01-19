var acceso = true

/*var accesoU = function(a){
    return a
}*/

//Cuando la funcion retorna un solo valor, quitamos los parentesis del parametro, las llaves, la palabra function y la palabra return se reemplaza por =>
//var accesoU = a => a

//Si no le pasamos parametro a la funcion, ponemos parentesis () y retornamos un valor
//var accesoU = () => true

//Si le pasamos mas de un parametro, los ponemos en parentesis
/*var accesoU = (a,n) => console.log(`Usuario ${n} Acceso ${a}`)
accesoU(acceso, "Camila")*/

//Si vamos a devolver mas de un valor, debemos de usar llaves {}
var accesoU = (a,nombre) => {
    console.log(`Usuario ${nombre} en ejecucion`)
    return a
}

accesoU(acceso, "Camila") == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")