// funcion tradicional calcular la distancia entre dos puntos 

function calcularDistancia(x1,y1,x2,y2){


    return (Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)))
    
}


let distancia=(calcularDistancia(0,0,-10,-10)).toFixed(2)
console.log (`la distancia es ${distancia}`)

let calcularDistanciafuncionflecha = (x1,y1,x2,y2)=> Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)).toFixed(2)

console.log(`la distancia es ${calcularDistanciaflecha(0,0,-10,-10)}`)






