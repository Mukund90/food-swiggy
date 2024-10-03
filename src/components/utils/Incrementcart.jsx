import { useState } from "react";
import Cartcontext from "./Cartcontext";

const Incrementcart = ({children})=>
{
   const [cart ,setcart] = useState(0);
   const [addcart , setaddcart] = useState([]);

   return (
    <Cartcontext.Provider value = {{cart, setcart,addcart,setaddcart}}>
        {children}
    </Cartcontext.Provider>
   )

}

export default Incrementcart;