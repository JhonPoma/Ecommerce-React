import { useState, useEffect, useContext } from "react"
import {CarritoCompraContext} from '../../Context/index'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductoDetalles from '../../Components/ProductoDetalle'

function Home(){
    
    const contexto = useContext(CarritoCompraContext)


    //console.log("producto TItulo Busqueda: ", contexto.busquedaPorTitulo)

    const VistaRenderizada = ()=>{

        if(contexto.busquedaPorTitulo?.length>0 ){
            if(contexto.itemsFiltrados?.length>0){
                return(
                    contexto.itemsFiltrados?.map( (ele)=>
                        
                            <Card key={ele.id} propData={ele}/>
                        
                    )
                )
            }
            else{
                return(
                    <div className=" border-black"> 
                        Producto no encontrado
                    </div>
                )
            }
        }


        else{
            return (

                contexto.items?.map( (elemento)=>{
                    return(
                        <Card key={elemento.id} propData={elemento}/>
                    )
                })

            )
        }
    }

    return(
        <>
            <Layout>
                <div className="flex justify-between items-center p-6">
                    <h2 className='font-medium text-xl'> Productos </h2>
                </div>

                <input type="text" 
                        placeholder="Busqueda de productos" 
                        onChange={ (even)=> contexto.setBusquedaPorTitulo(even.target.value) } 
                        className="border border-black rounded-lg w-80 p-3 mb-4 focus:outline-none" />

                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        VistaRenderizada()
                    }
                </div>

                <ProductoDetalles/>

            </Layout>
        </>
    )
}
export default Home