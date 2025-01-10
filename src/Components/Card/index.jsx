import { useContext } from "react"
import {CarritoCompraContext} from '../../Context/index.jsx'
import { FaPlus } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5"; //

const Card= (propData)=>{

    // console.log("CARD...VERIFICANDO:",propData.propData.id);  // Verifica qué contiene
    // console.log("CARD...VERIFICANDO:",propData.propData.images[0]);

    const contexto = useContext(CarritoCompraContext)

    const showProductos = (datosDeProductos)=>{
        contexto.openProductDetalle()
        contexto.setProductoMostrar(datosDeProductos)
        contexto.closeCheckoutSideMenu()
    }

    const addProductosCarrito = (event, datosDeProductosParaElCarrito)=>{
        event.stopPropagation()
        contexto.openCheckoutSideMenu()
        contexto.setContador(contexto.contador+1)
        contexto.setCarritoProductos([...contexto.carritoProductos, datosDeProductosParaElCarrito])
        contexto.closeProductDetalle()
        
    }

    // Funciones, cuando seleccionamos un producto este cambia de icono a seleccionado a carrito
    const renderizarIcono = (idProducto)=>{
        
        // Del array de objetos que esta en el Card-del-Carrito filtramos si ya esta ese ID en el carrito,
        // para bloquearlo del Card-del-Home.
        const isProductoEnElCarrito = contexto.carritoProductos.filter((elemento)=>{
            if(elemento.id === idProducto){
                console.log("SIIIII ESTA EN EL CARRITO")
                return true
            }
            return false
        }).length > 0
        // console.log("valor:", isProductoEnElCarrito)
        if(isProductoEnElCarrito){
            return(
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" > 
                    <IoBagCheck className="text-green-400"/>
                </div>
            )
        }
        else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={ (event)=> {addProductosCarrito(event, propData.propData)} } > 
                    <FaPlus />  
                </div>
            )


        }

    }

    return(
        <>
            <div onClick={()=>{ showProductos(propData.propData) }} 
                className="bg-slate-100 cursor-pointer w-56 h-60 rounded-lg mb-4">
                
                <figure className='relative mb-2 w-full h-4/5 bg-blue-200'>
                    <span className="absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5"> {propData.propData.category} </span>
                    <img className="w-full h-full object-cover rounded-lg" src={propData.propData.images[0]} alt={propData.propData.title} />
                    {renderizarIcono(propData.propData.id)}
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