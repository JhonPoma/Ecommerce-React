import { useState, useEffect, useContext } from "react"
import {CarritoCompraContext} from '../../Context/index'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductoDetalles from '../../Components/ProductoDetalle'

function Home(){
    
    const contexto = useContext(CarritoCompraContext)




    return(
        <>
            <Layout>
                Homee

                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        contexto.items?.map( (elemento)=>{
                            return(
                                <Card key={elemento.id} propData={elemento}/>
                            )
                        })
                    }
                </div>

                <ProductoDetalles/>

            </Layout>
        </>
    )
}
export default Home