
/**
 * Esta funcion calcula el total del precio de nuestra orden
 * @param {Array} elemen, carritoProductos es un array de objetos
 * @returns total del precio
 */

const sumaPreciosTotal = ( elemen )=>{

    let suma = 0
    
    elemen.forEach( produ => {
        suma = suma + produ.price
    });

    //return suma
    return parseFloat(suma.toFixed(2))
}

export default sumaPreciosTotal



// viene un array de objetos  [   {},   {},   {} , ...]