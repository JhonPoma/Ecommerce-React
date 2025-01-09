import { createContext, useState } from "react";


const CarritoCompraContext = createContext()


const CarritoCompraProvider = ( {children} )=>{
    
    const [ contador, setContador ] = useState(0)
    // console.log("contador : ", contador)
    return(
        <>
            <CarritoCompraContext.Provider value={{
                contador,
                setContador
            }}>
                {children}
            </CarritoCompraContext.Provider>
        </>
    )

}


export { CarritoCompraContext, CarritoCompraProvider };


