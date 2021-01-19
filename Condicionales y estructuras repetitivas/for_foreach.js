//foreach se usa para arrays

for(i = 1; i <= 10; i ++){
    if(i == 1){
        console.log("Hola " + i + " vez")
    }else{
        console.log("Hola " + i + " veces")
    }
}

var miArray = ["Hola", 2020, "Adios"]

for (let index = 0; index < miArray.length; index++) {
    const element = miArray[index];
    console.log(element)
}

miArray.forEach((element,i) => {
    console.log(i)
})

var persona1 = {
    nombre : "Camila",
    edad : 18
}

var persona2 = {
    nombre : "Maria",
    edad : 10
}

var persona3 = {
    nombre : "Mauricio",
    edad : 26
}

var personas = [persona1, persona2, persona3]

for (let index = 0; index < personas.length; index++) {
    if(personas[index].edad >= 20){
        break;
    }
    const element = personas[index].nombre;
    console.log(element)
}

personas.forEach(element => console.log(element.edad))