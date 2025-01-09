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
