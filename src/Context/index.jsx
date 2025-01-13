import { use } from "react";
import { createContext, useState , useEffect} from "react";


const CarritoCompraContext = createContext()


const CarritoCompraProvider = ( {children} )=>{
    
    // Carrito de compra, incrementando
    const [ contador, setContador ] = useState(0) // console.log("contador : ", contador)

    // ProductDetalles - Open/Close
    const [ isOpenProductDetalles, setIsOpenProductDetalles] = useState(false)
    const openProductDetalle = ()=>{setIsOpenProductDetalles(true)}
    const closeProductDetalle = ()=>{setIsOpenProductDetalles(false)}

    // ProductDetalles - estado para mostrar productos, este estado debe almacenar la informacion de la CARD.
    const [productoMostrar, setProductoMostrar] = useState({})

    // Carrito de Compra - añadir productos al carrito
    const [carritoProductos, setCarritoProductos] = useState([]) // array de objetos

    // Checkout Side Menu - Open/Close
    const [ isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = ()=>{setIsOpenCheckoutSideMenu(true)}
    const closeCheckoutSideMenu = ()=>{setIsOpenCheckoutSideMenu(false)}

    // Carrito de Compra - añadimos nuestra compra a una orden
    const [orden, setOrden] = useState([])


    // Obtener productos de la api
    const[items, setItems] = useState(null)
    const[itemsFiltrados, setItemsFiltrados] = useState(null)

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

    // Obtener productos por Titulo
    const [busquedaPorTitulo, setBusquedaPorTitulo ] = useState(null)

    // Funcion para filtrar los items por Titulo
    const ItemsFiltradosPorTitulo = (items, busquedaPorTitulo)=>{
        return items?.filter( (ele)=> ele.title.toLowerCase().includes(busquedaPorTitulo.toLowerCase() ) )
    }

    useEffect( ()=>{
        if(busquedaPorTitulo){
            console.log("itemss: ",items)

            console.log("buscamos: ",busquedaPorTitulo)
            setItemsFiltrados(ItemsFiltradosPorTitulo(items, busquedaPorTitulo))
        }
    },[items, busquedaPorTitulo] )

    // console.log("itemsFiltrados: ", itemsFiltrados)
    return(
        <>
            <CarritoCompraContext.Provider value={{
                contador,
                setContador,

                isOpenProductDetalles,
                openProductDetalle,
                closeProductDetalle,

                productoMostrar,
                setProductoMostrar,

                carritoProductos,
                setCarritoProductos,

                isOpenCheckoutSideMenu,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
            
                orden,
                setOrden,

                items,
                setItems,

                busquedaPorTitulo,
                setBusquedaPorTitulo,

                itemsFiltrados
            }}>
                {children}
            </CarritoCompraContext.Provider>
        </>
    )

}


export { CarritoCompraContext, CarritoCompraProvider };


