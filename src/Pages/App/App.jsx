
import { useRoutes, BrowserRouter } from 'react-router-dom'
import {CarritoCompraProvider} from '../../Context/index.jsx'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import Navbar from '../../Components/Navbar/index.jsx'

import './App.css';

const AppRoutes = ()=>{
  let routes = useRoutes([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/my-account',
      element: <MyAccount/>
    },
    {
      path:'/my-order',
      element: <MyOrder/>
    },
    {
      path:'/my-orders',
      element: <MyOrders/>
    },
    {
      path:'/*',
      element: <NotFound/>
    },
    {
      path:'/sign-in',
      element: <SignIn/>
    },
  ])

  return routes
}


function App() {

  return (
    
    <>
    <CarritoCompraProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
        </BrowserRouter>
    </CarritoCompraProvider>
    </>
  )
}

export default App
