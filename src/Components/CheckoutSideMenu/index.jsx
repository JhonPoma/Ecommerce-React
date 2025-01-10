import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { CarritoCompraContext } from "../../Context";
import OrdenCart from '../OrdenCard/index'

import './styleCheckoutSideMenu.css'

const CheckoutSideMenu = ()=>{

    const contexto = useContext(CarritoCompraContext)

    return(
        <>
            <aside className={`${contexto.isOpenCheckoutSideMenu? 'flex':'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
                
              <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'> My Orden </h2>
                <div>
                    <IoMdClose onClick={()=>{contexto.closeCheckoutSideMenu()}} className='h-6 w-6 text-red-600 cursor-pointer'/> 
                </div>
              </div>

              <div className="overflow-y-scroll">
                {
                  contexto.carritoProductos.map( (elemento)=>{
                    return(
                      
                        <OrdenCart 
                          key={elemento.id}
                          titulo = {elemento.title}
                          imagen = {elemento.images?.[0]}
                          precio = {elemento.price}
                        />    
                    )
                  })
                }
              </div>


            </aside>
        
        </>
    )


}

export default CheckoutSideMenu