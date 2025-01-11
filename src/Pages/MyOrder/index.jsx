
import { useContext } from "react"
import {CarritoCompraContext} from '../../Context/index'
import { Link } from "react-router-dom"
import { FaChevronCircleLeft } from "react-icons/fa";
import OrdenCart from '../../Components/OrdenCard/index'
import Layout from "../../Components/Layout"

function MyOrder(){


    const contexto = useContext(CarritoCompraContext)
    console.log("--------",contexto.orden?.slice(-1)[0])

    console.log("--------",contexto.orden?.slice(-1)[0].prodOrden)//Con esto accedemos al ultimo elemento de nuestro array de objetos(productos de objOrden)

    return(
        <>
            <Layout>
                <div className="flex items-center justify-center relative w-80 pb-8">
                  <Link to='/my-orders' className="absolute left-0">
                    <FaChevronCircleLeft  className="h-6 w-6 cursor-pointer"/>
                  </Link>

                  <h1> Mi Orden </h1>
                </div>

                <div className="flex flex-col w-80 border rounded-lg px-4">
                {
                  contexto.orden?.slice(-1)[0].prodOrden.map( (elemento)=>{
                    return(
                      
                        <OrdenCart 
                          key={elemento.id}
                          idProd = {elemento.id}
                          titulo = {elemento.title}
                          imagen = {elemento.images?.[0]}
                          precio = {elemento.price}
                          />   
                       
                
                    )
                  })
                }
       

                <div className="pt-5 pb-2 px-8 flex justify-between">
                  <span className="font-medium text-xl"> Total : </span>
                  <span className="font-bold text-2xl pr-4"> $ {contexto.orden?.slice(-1)[0].totalPrecio} </span>         
                </div>




              </div>


            </Layout>
        </> 
    )
}

export default MyOrder