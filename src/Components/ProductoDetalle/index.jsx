import { IoMdClose } from "react-icons/io";
import './styleProductoDetalle.css'
import { useContext } from "react";
import { CarritoCompraContext } from "../../Context";

const ProductoDetalles = ()=>{

    const contexto = useContext(CarritoCompraContext)
    // Revisamos el prodcto que recibimos de CARD
    console.log("Producto a Mostrar", contexto.productoMostrar)

    return(
        <>
            <aside className={`${contexto.isOpenProductDetalles? 'flex':'hidden'} product-detallito flex-col fixed right-0 border border-black rounded-lg bg-white`}>
                <div>
                    <div className="flex justify-between items-center p-6">
                      <h2 className='font-medium text-xl'> Detalles </h2>
                      <div>
                          <IoMdClose onClick={()=>{contexto.closeProductDetalle()}} className='h-6 w-6 text-red-600 cursor-pointer'/> 
                      </div>
                    </div>

                    {/* Armamos una estructura para mostrar la informacion del producto recibido, cuando se hizo click en CARD */}
                    <div className="px-12">
                      <figure className="px-6 bg-blue-100 rounded-lg">
                        <img className="w-full h-full rounded-lg" src={contexto.productoMostrar?.images?.[0]} alt={contexto.productoMostrar.title} />
                      </figure>
                      <p className="flex flex-col p-6">
                        <span className="font-medium text-2xl mb-2">$ {contexto.productoMostrar.price}</span>
                        <span className="font-medium text-md">{contexto.productoMostrar.title}</span>
                        <span className="font-lite text-sm">{contexto.productoMostrar.description}</span>
                      </p>                    
                    </div>

                </div>

            </aside>
        
        </>
    )


}

export default ProductoDetalles