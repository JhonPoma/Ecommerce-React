# React + Vite



- Configuramos nuesto proyecto para usar TailwindCSS: https://tailwindcss.com/docs/installation/using-postcss


- Componente **Layout**, creamos este componente que sera el padre de mis componentes HOME, MyAccount,.. . Este layout funcionara como un WRAPPER(envoltura) para mis componentes, asi todos tendran el mismo estilo. **children** es un **prop** que se pasa a Layout, y luego se renderiza dentro de un div con clases de Tailwind.
```javascript
const Layout= ({children})=>{
    return(
        <>
            <div className='flex flex-col mt-20'>
                {children} {/* Aquí se renderizamoz el contenido hijo (Home, MyAccount,..) */}
            </div>
        </>
    )
}
export default Layout
```

- Componente **Card**, creamos una estructura para nuestras imagenes, luego consumiremos una api de productos.

- API para pintar nuestros CARDS, una manera limpia de hacer peticiones es usando async/await.  
usamos esta api falsa : https://dummyjson.com/products, pero tiene una estructura, donde debo acceder solo al array "products"
```javascript
    {
        "products": [
        ],
        "total": 194,
        "skip": 0,
        "limit": 30
    }

// y en mi peticion de fetch accedemos :
    const respuesta = await fetch('https://dummyjson.com/products') 
    const datos1 = await respuesta.json()

    // Visualizanco en consola.
    console.log("RESPUESTA",respuesta)
    console.log("DATOS(res a json)",datos1.products)
```

- Usaremos createContext, para generar un contexto global y este contendra a todos los compontentes.
Se utiliza para definir un contexto que pueda ser accedido por cualquier componente dentro de un árbol de componentes.

```javascript
// En nuestro Context/index.jsx
import { createContext } from "react";

const carritoCompraContext = createContext()
export const carritoCompraProvider = ( {childrenX} )=>{    
        return(
            <carritoCompraContext.Provider>
                {childrenX}
            </carritoCompraContext.Provider>
        )
    }
```
```javascript
// En nuestro componente raíz App.jsx
   return (
    <>
    <carritoCompraProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
        </BrowserRouter>
    </carritoCompraProvider>
    </>
  )
```


- Comunicaremos elementos(pagimas), para que cuando hagamos click en nuestro card (dentro de HOME) se incremente nuestro carrito de compra(dentro de NavBar).  
instalamos para usar iconos : >npm install react-icons  
podemos usar iconos : https://react-icons.github.io/react-icons/  
Usamos useContext para asociar mis paginas, uso el **CarritoCompraContext** que eh creado.


- Creamos un sideMenu, cuando hago click en un producto este se visualize al costado derecho.  
Para eso creamos un nuevo componente y dentro un **aside** que seria como un wrapper(envoltura)

- Mostraremos los productos en nuestro aside(que es nuestro componente ProductoDetalle).  
En CARD queremos que cuando se hague click, aparte de abrirse el aside, se guarde la informacion de ese CARD para luego mostrar en nuestro aside

- Agregaremos productos al carrito, cuando se haga click en el icono "+", para eso creamos un estado **carritoProductos** que almacenara un **array de objetos**, cada que el usuario hace click se va agregando el objeto en el array, usamos para eso ***spread operator***


- Creamos un compoenente para visualizar los producto que estoy agregando al carrito, lo llamaremos ***CheckoutSideMenu***, ahi mostraremos ese array de objetos (que son los productos que vamos seleccionando para comprar)

- Creamos un CARD pero para nuestros productos que estaran en MyOrden(en nuestro carrito)


- Cuando agregamos productos al carrito esto se visualiza bien, pero se puede duplicar y eso esta mal, para eso Evitaremos duplicaciones bloqueando el simbolo "+" una vez seleccionado

- Eliminaremos productos del carrito

- Creamos una carpeta Utils, ahi creamos una funcion que nos servira para realizar la suma total de los precios del carrito.  
Carpeta Utils: se utiliza comúnmente para almacenar funciones o módulos de utilidad que realizan tareas comunes y que pueden ser reutilizadas en diferentes partes de la aplicación. Estas funciones suelen ser independientes del componente, y su propósito es ayudar con la lógica reutilizable, sin necesidad de duplicarla.


- Visualizamos nuestro checkout(ordenes registradas) en la pagina que creamos "MyOrders", para eso volvemos a usar el componente **<Link/>** de React de la biblioteca ***react-router-dom***, cuando hagamos click en el boton "checkout" este nos lleve a la pagina "MyOrders/last" y visualizaremos el ultimo grupo de productos que hicimos checkout , para eso usamos **contexto.orden?.slice(-1)[0].prodOrden**