// funcion para separar una cadena de texto

function separarCadena(cadenaTexto){
    
 return (cadenaTexto.split(":")[1])
    

}
// llamando la funcion 

console.log (separarCadena("abc1234:piloto"))

let separarCadenaflecha= cadenaTexto => (cadenaTexto.split(":")[1])

console.log (`El nombre es ${separarCadenaflecha("abcnd:juanpablo")}`)


