import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { CarritoCompraContext } from "../../Context";
import { Link } from "react-router-dom";
import OrdenCart from '../OrdenCard/index'
import sumaPreciosTotal from '../../utils/sumaPrecios.js'

import './styleCheckoutSideMenu.css'

const CheckoutSideMenu = ()=>{

    const contexto = useContext(CarritoCompraContext)
    console.log("CARRITO: ",contexto.carritoProductos)

    const handleeParaEliminar = (idProductoEliminar)=>{

      // Buscamos de entre todos mis productos en el carrito el ID a eliminar, lo eliminanos y nos quedamos con el conjunto restante
      const filtramos = contexto.carritoProductos.filter( (elem)=> elem.id != idProductoEliminar )
      
      // Y seteamos de nuevo nuestros productosDelCarrito, pero sin el ID que queriamos eliminar.
      contexto.setCarritoProductos(filtramos)
      
    }


    const handleeParaCheckout = ()=>{

      const fechaActual = new Date();
      // Obtener la fecha en formato 'dd.mm.yy' (ejemplo: '10.01.25')
      const fechaFormateada = `${fechaActual.getDate().toString().padStart(2, '0')}.${(fechaActual.getMonth() + 1).toString().padStart(2, '0')}.${fechaActual.getFullYear().toString().slice(-2)}`;
      // Obtener la hora en formato de 24 horas 'hh:mm:ss' (ejemplo: '14:30:45')
      const horaFormateada = `${fechaActual.getHours().toString().padStart(2, '0')}:${fechaActual.getMinutes().toString().padStart(2, '0')}:${fechaActual.getSeconds().toString().padStart(2, '0')}`;


      // Creamos un objeto para luego almacenarlo en el array de Orden
      const objOrden = {
        date : `${fechaFormateada} ${horaFormateada}`,
        prodOrden : contexto.carritoProductos,
        'totalProductos' : contexto.carritoProductos.length,
        'totalPrecio' : sumaPreciosTotal(contexto.carritoProductos)
      }

      contexto.setOrden([...contexto.orden, objOrden])

      // Limpiamos la vista de ordenCart
      contexto.setCarritoProductos([])
      // Limpiamos la cantidad de productos del carrito, lo llevamos a 0
      contexto.setContador(0)

      // Cerramos el checkoutSide
      contexto.closeCheckoutSideMenu()

      //console.log("MI ORDENNNN : ", contexto.orden)
    }

    return(
        <>
            <aside className={`${contexto.isOpenCheckoutSideMenu? 'flex':'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
                
              <div className="flex justify-between items-center p-6">
                <h2 className='font-medium text-xl'> My Orden </h2>
                <div>
                    <IoMdClose onClick={()=>{contexto.closeCheckoutSideMenu()}} className='h-6 w-6 text-red-600 cursor-pointer'/> 
                </div>
              </div>

              <div className="overflow-y-scroll flex-1">
                {
                  contexto.carritoProductos.map( (elemento)=>{
                    return(
                      
                        <OrdenCart 
                          key={elemento.id}
                          idProd = {elemento.id}
                          titulo = {elemento.title}
                          imagen = {elemento.images?.[0]}
                          precio = {elemento.price}
                          manejadorEliminar = {handleeParaEliminar} /* Pasamos una referencia de la funcion ya en OrdenCard lo ejecutamos, en vez de ejecutarla aqui directamente*/
                        />    
                    )
                  })
                }
              </div>

              <div className="pt-5 pb-2 px-8 flex justify-between">
                <span className="font-medium text-xl"> Total : </span>
                <span className="font-bold text-2xl pr-4"> $ {sumaPreciosTotal(contexto.carritoProductos)} </span>         
              </div>

              <div className="bg-black text-white mx-8 rounded-full py-2 mb-6">
                <Link to='/my-orders/last' className="flex justify-center">
                  <button  onClick={()=>handleeParaCheckout()} > Checkout </button>
                </Link>
              </div>
                

            </aside>
        </>
    )
}

export default CheckoutSideMenu