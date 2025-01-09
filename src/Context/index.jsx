import { use } from "react";
import { createContext, useState } from "react";


const CarritoCompraContext = createContext()


const CarritoCompraProvider = ( {children} )=>{
    
    // Carrito de compra, incrementando
    const [ contador, setContador ] = useState(0)
    // console.log("contador : ", contador)

    // ProductDetalles - Open/Close
    const [ isOpenProductDetalles, setIsOpenProductDetalles] = useState(false)

    const openProductDetalle = ()=>{setIsOpenProductDetalles(true)}
    const closeProductDetalle = ()=>{setIsOpenProductDetalles(false)}

    // ProductDetalles - estado para mostrar productos, este estado debe almacenar la informacion de la CARD.
    const [productoMostrar, setProductoMostrar] = useState({})

    return(
        <>
            <CarritoCompraContext.Provider value={{
                contador,
                setContador,

                isOpenProductDetalles,
                openProductDetalle,
                closeProductDetalle,

                productoMostrar,
                setProductoMostrar
            }}>
                {children}
            </CarritoCompraContext.Provider>
        </>
    )

}


export { CarritoCompraContext, CarritoCompraProvider };


