var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "Pepe",
    miAuromovil :[
        pintura = {
            marca : "Marca",
            precio : 20000,
            color : "Verde"
        },
        vendedor = {
            nombre : "Camila",
            edad : 18,
            ayudante : {
                nombre : "Julio"
            }
        }
    ]
}
var miArray = ["Camila", 2020, 34.9, true, ["Otro array", "Array", 7900], miFuncion(permitido), persona]

console.log(miArray[4][1])
console.log(miArray[5])
console.log(miArray[6].nombre)
console.log(miArray[6].miAuromovil[1].ayudante.nombre)