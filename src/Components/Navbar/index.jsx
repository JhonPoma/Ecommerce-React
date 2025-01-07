import { NavLink } from "react-router-dom"

const Navbar= ()=>{

    return(

        <nav>
            {/* LADO IZQUIERDO */}
            <ul>
                <li>
                  <NavLink to='/'>
                    tienda
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/all'>
                    Todo
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/clothes'>
                    Clothes
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/electronics'>
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/furnitures'>
                    Furnitures
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/toys'>
                    Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/others'>
                    Others
                  </NavLink>
                </li>
                

            </ul>

            {/* LADO DERECHO */}
            <ul>
                <li>
                  jhon@gmail.com
                </li>
                <li>
                  <NavLink to='/my-orders'>
                    MyOrders
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/my-account'>
                    MyAccount
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/sign-in'>
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