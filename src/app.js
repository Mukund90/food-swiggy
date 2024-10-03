import React, { useLayoutEffect} from "react";
import ReactDOM from "react-dom/client"
import '../hima.css'
import Header1 from "./components/Header1.jsx";
import Body from "./components/Body.jsx"
import {Footer} from "./components/Footer.jsx"
import About from "./components/ABOUT.jsx"
import Cart from "./components/Cart.jsx"
import { Restaurant } from "./components/Resturant.jsx";
import Contact from "./components/Contact.jsx"
import Error from "./components/Error.jsx"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Loginpage } from "./components/Login-page.jsx";
import { lazy,Suspense} from "react";
import Incrementcart from "./components/utils/Incrementcart.jsx";


const Instamart = lazy(()=>import('./components/Instamart.jsx'))

// code spiliting
// dynamic importing
// code chunking
// server side spilliting



 
const Appholder=()=>   
{
return (
    <>
   
     <Header1/>
     <Outlet/>
     <Footer/>
 
    </>
  )

}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Appholder/>,
    errorElement:<Error/>,                   //nesting Routing 
    children : [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
        errorElement:<Error/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>,
      },
      {
        path:'/restaurant/:id',
        element:<Restaurant/>,
        errorElement:<Error/>
      },
      {
        path:'/login',
        element:<Loginpage/>,
        errorElement:<Error/>
        
      },
      {
        path:'/instamart',
        element:<Suspense> <Instamart/></Suspense>  //there is a fallback also where we can used shimmer effect...
      },
      
     
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("id"));

root.render(
  <Incrementcart>
<RouterProvider
 router={appRouter}
 />
 </Incrementcart>)
