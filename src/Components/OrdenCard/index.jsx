import { IoMdClose } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

const OrdenCart = (propiedadesVienenCheckoutSideMenu)=>{

    const {titulo, imagen, precio} = propiedadesVienenCheckoutSideMenu

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
                     <RiDeleteBin6Fill className='h-6 w-6 text-red-600 cursor-pointer'/>
                </div>
            </div>   
        
        </>
    )
}

export default OrdenCart