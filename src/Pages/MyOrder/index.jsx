
import { useContext } from "react"
import {CarritoCompraContext} from '../../Context/index'
import OrdenCart from '../../Components/OrdenCard/index'
import Layout from "../../Components/Layout"

function MyOrder(){


    const contexto = useContext(CarritoCompraContext)
    console.log("--------",contexto.orden?.slice(-1)[0].prodOrden)//Con esto accedemos al ultimo elemento de nuestro array de objetos(productos de objOrden)

    return(
        <>
            <Layout>
                myOrden
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
              </div>


            </Layout>
        </> 
    )
}

export default MyOrder