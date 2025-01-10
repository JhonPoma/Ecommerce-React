import { use } from "react";
import { createContext, useState } from "react";


const CarritoCompraContext = createContext()


const CarritoCompraProvider = ( {children} )=>{
    
    // Carrito de compra, incrementando
    const [ contador, setContador ] = useState(0) // console.log("contador : ", contador)

    // ProductDetalles - Open/Close
    const [ isOpenProductDetalles, setIsOpenProductDetalles] = useState(false)
    const openProductDetalle = ()=>{setIsOpenProductDetalles(true)}
    const closeProductDetalle = ()=>{setIsOpenProductDetalles(false)}

    // ProductDetalles - estado para mostrar productos, este estado debe almacenar la informacion de la CARD.
    const [productoMostrar, setProductoMostrar] = useState({})

    // Carrito de Compra - añadir productos al carrito
    const [carritoProductos, setCarritoProductos] = useState([]) // array de objetos

    // Checkout Side Menu - Open/Close
    const [ isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = ()=>{setIsOpenCheckoutSideMenu(true)}
    const closeCheckoutSideMenu = ()=>{setIsOpenCheckoutSideMenu(false)}

    // Carrito de Compra - añadimos nuestra compra a una orden
    const [orden, setOrden] = useState([])

    return(
        <>
            <CarritoCompraContext.Provider value={{
                contador,
                setContador,

                isOpenProductDetalles,
                openProductDetalle,
                closeProductDetalle,

                productoMostrar,
                setProductoMostrar,

                carritoProductos,
                setCarritoProductos,

                isOpenCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
            
                orden,
                setOrden
            }}>
                {children}
            </CarritoCompraContext.Provider>
        </>
    )

}


export { CarritoCompraContext, CarritoCompraProvider };


