import { useState, useEffect } from "react"

import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductoDetalles from '../../Components/ProductoDetalle'

function Home(){
    
    const[items, setItems] = useState(null)
    

    // useEffect( ()=>{
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then(respuesta => console.log(respuesta.json()))
    //         .then(datos1 => setItems(datos1))
    // }, []    )

    useEffect( ()=>{
        const fecthDatos = async ()=>{
            try{
                //const respuesta = await fetch('https://api.escuelajs.co/api/v1/products')  // Aveces cae esta api, API-1
                const respuesta = await fetch('https://dummyjson.com/products')             // Usamos otra api, API-2 
                const datos1 = await respuesta.json()

                // // Visualizanco en consola - API-1
                // console.log("RESPUESTA",respuesta)
                // console.log("DATOS(res a json)",datos1)            
                //     // Estos datos en formato JSON lo almacenamos en nuestro Estado.
                // setItems(datos1) //Guardamos el conjunto de datos1 en el estado        

                // Visualizanco en consola - API-2
                console.log("RESPUESTA",respuesta)
                console.log("DATOS(res a json)",datos1.products)
                    // Estos datos en formato JSON lo almacenamos en nuestro Estado.
                setItems(datos1.products) //Guardamos el conjunto de datos1 en el estado
            }
            catch(error){
                console.log(error)
            }
        }
        fecthDatos();
    },[])


    return(
        <>
            <Layout>
                Homee

                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        items?.map( (elemento)=>{
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