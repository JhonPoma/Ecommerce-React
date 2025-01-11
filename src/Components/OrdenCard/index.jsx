import { useContext } from "react";
import { CarritoCompraContext } from "../../Context/index";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

const OrdenCart = (propiedadesVienenCheckoutSideMenu)=>{

    const {idProd, titulo, imagen, precio, manejadorEliminar} = propiedadesVienenCheckoutSideMenu


    // Cada que el usuario elimine un producto del carrito, tambien debe disminuir el contador.
    const contexto = useContext(CarritoCompraContext)

    const elimandoProductosdDelCarrito=()=>{
        manejadorEliminar(idProd)
        contexto.setContador(contexto.contador - 1 )
    }

    // Reenderizamos el Icono Eliminar Producto (papelera).
    let renderizarIconoEliminar
    if(manejadorEliminar){
        renderizarIconoEliminar = <RiDeleteBin6Fill onClick={()=>elimandoProductosdDelCarrito()} className='h-6 w-6 text-red-600 cursor-pointer'/>
    }   
    return(
        <>  
            <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2 py-2">
                    <figure className="w-20 h-20 bg-blue-200 rounded-lg">
                        <img className="w-full h-full rounded-lg object-cover" src={imagen} alt={titulo} />
                    </figure>
                    <p className="w-20 h-15 text-sm font-light"> {titulo} </p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-medium">$ {precio} </p>
                    {renderizarIconoEliminar}
                </div>

            </div>   
        
        </>
    )
}

export default OrdenCart