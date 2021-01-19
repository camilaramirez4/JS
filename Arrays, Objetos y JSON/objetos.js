var user = "Camila"
var persona = {
    nombre : "Camila",
    sexo : "Femenino"
}

var miObjeto = {
    //clave : valor
    nombre : "Camila",
    edad : 18,
    importante : true, 
    texto : `Usuario ${user}`,
    miFuncion : (a,b) => a + b,
    otroObjeto : persona,
    fecha : new Date
}

//Desestructuracion de objetos. {clave} = objeto
var {nombre} = miObjeto

//Desglosar objetos
var otraFuncion = (text , {otroObjeto}) => {
    console.log(otroObjeto.sexo)
    console.log(text)
}

console.log(miObjeto.miFuncion(4,8))
console.log(miObjeto.otroObjeto.nombre)
console.log(miObjeto.fecha.getFullYear())
console.log(nombre)
otraFuncion(miObjeto.texto, miObjeto)