import { useContext } from "react"
import {CarritoCompraContext} from '../../Context/index.jsx'

const Card= (propData)=>{

    // console.log("CARD...VERIFICANDO:",propData.propData.id);  // Verifica qué contiene
    // console.log("CARD...VERIFICANDO:",propData.propData.images[0]);

    const contexto = useContext(CarritoCompraContext)

    return(
        <>
            <div className="bg-slate-100 cursor-pointer w-56 h-60 rounded-lg mb-4">
                <figure className='relative mb-2 w-full h-4/5 bg-blue-200'>
                    <span className="absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {propData.propData.category} </span>
                    <img className="w-full h-full object-cover rounded-lg" src={propData.propData.images[0]} alt={propData.propData.title} />
                    <div 
                        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                        onClick={ ()=>contexto.setContador(contexto.contador+1) }    
                        > 
                        +  
                    </div>
                </figure>
                <p className="flex justify-between ">
                    <span className="text-sm font-light pl-2"> {propData.propData.title} </span>
                    <span className="text-lg font-medium pr-2">  {propData.propData.price} </span>
                </p>
            </div>
        </>
    )

}
export default Card

// Creamos esta estructura para nuestros productos