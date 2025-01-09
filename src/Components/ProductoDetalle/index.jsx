import { IoMdClose } from "react-icons/io";
import './styleProductoDetalle.css'

const ProductoDetalles = ()=>{

    return(
        <>
            <aside className="product-detallito flex flex-col fixed right-0 border border-black rounded-lg bg-white">
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'> Detalles </h2>
                    <div>
                        <IoMdClose className='h-6 w-6 text-red-600'/> 
                    </div>
                </div>
            </aside>
        
        </>
    )


}

export default ProductoDetalles