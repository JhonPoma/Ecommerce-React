import { createContext } from "react";


const carritoCompraContext = createContext()


export const carritoCompraProvider = ( {childrenX} )=>{
    
    return(
        <carritoCompraContext.Provider>
            {childrenX}
        </carritoCompraContext.Provider>
    )

}



