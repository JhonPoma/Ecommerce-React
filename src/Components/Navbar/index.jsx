import { NavLink } from "react-router-dom"

const Navbar= ()=>{

    //Este estilo se mostrara cuando este seleccionado la ruta
    // EJEMPLO SIN USAR TAILWINDS, usamos un objeto JavaScript para manejar estilos.
    let estiloActivado2 = {
      textDecoration:"underline",
      color:"green"
    }
    // USANDO TAILWINDS, usamos las clases de tailwinf para aplicar estilos.
    const estiloActivado = 'underline underline-offset-4 text-green-500'


    return(

        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
            {/* LADO IZQUIERDO */}
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                  <NavLink to='/' >
                    tienda
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/all' style={({isActive})=>isActive?estiloActivado2:undefined}>
                    Todo
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/clothes' style={({isActive})=>isActive?estiloActivado2:undefined}>
                    Clothes
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/electronics' className={({isActive})=>isActive?estiloActivado:undefined} >
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/furnitures' className={({isActive})=>isActive?estiloActivado:undefined}>
                    Furnitures
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/toys' className={({isActive})=>isActive?estiloActivado:undefined}>
                    Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/others' className={({isActive})=>isActive?estiloActivado:undefined}>
                    Others
                  </NavLink>
                </li>
                

            </ul>

            {/* LADO DERECHO */}
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                  jhon@gmail.com
                </li>
                <li>
                  <NavLink to='/my-orders' className={({isActive})=>isActive?estiloActivado:undefined}>
                    MyOrders
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/my-account' className={({isActive})=>isActive?estiloActivado:undefined}>
                    MyAccount
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/sign-in' className={({isActive})=>isActive?estiloActivado:undefined}>
                    SignIn
                  </NavLink>
                </li>
                <li>
                  carrito
                </li>                
            </ul>

        </nav>

    )

}

export default Navbar