n = 0
x = 0

while (n < 3) {
  n ++
  x += n
  console.log(x)
}

cont = 5

while(cont  > 0){
    if(cont == 1){
        console.log("Hay " + cont + " mariposa")
    }else{
        console.log("Hay " + cont + " mariposas")
    }
    cont --
}

let result = ''
let i = 0

do {
  i = i + 1
  result = result + i
} while (i < 5)

console.log(result)
