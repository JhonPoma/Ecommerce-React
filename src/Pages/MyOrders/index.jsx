
import {CarritoCompraContext} from '../../Context/index'
import { useContext } from "react"
import { Link } from 'react-router-dom'
import OrdenesCard from '../../Components/OrdenesCard'
import Layout from "../../Components/Layout"

function MyOrders(){

    const contexto = useContext(CarritoCompraContext)

    console.log(contexto.orden)

    return(
        <>
            <Layout>
                Mis Ordenes

                {
                    contexto.orden.map( (eleme,index) => {
                        return(
                            <Link key={index} to={`/my-orders/${eleme.idOrden}`}>
                                <OrdenesCard 
                                    propFecha = {eleme.date}
                                    propTotalProductos  = {eleme.totalProductos}
                                    propTotalPrecio   = {eleme.totalPrecio}
                                />
                            </Link>
                        )

                    } )

                }


            </Layout>
        </>
    )
}

export default MyOrders