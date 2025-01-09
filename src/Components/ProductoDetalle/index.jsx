import { IoMdClose } from "react-icons/io";
import './styleProductoDetalle.css'
import { useContext } from "react";
import { CarritoCompraContext } from "../../Context";

const ProductoDetalles = ()=>{

    const contexto = useContext(CarritoCompraContext)

    return(
        <>
            <aside className={`${contexto.isOpenProductDetalles? 'flex':'hidden'} product-detallito flex-col fixed right-0 border border-black rounded-lg bg-white`}>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'> Detalles </h2>
                    <div>
                        <IoMdClose onClick={()=>{contexto.closeProductDetalle()}} className='h-6 w-6 text-red-600 cursor-pointer'/> 
                    </div>
                </div>

            </aside>
        
        </>
    )


}

export default ProductoDetalles