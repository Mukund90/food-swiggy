
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Login } from "./utils/uselogin";
import { useContext } from 'react';
import Cartcontext from './utils/Cartcontext';





const Header = () =>
    {
      
        
        return(<img alt="logo" className="h-24 sm:h-28 p-3 pb-8 hover:scale-105 transition-transform duration-300 ease-in-out" src={Logo}></img>)  
    }
    
    const Header1 = ()=> 
    {
      const {cart} = useContext(Cartcontext);
      
        return (<div className ="flex items-center border-2 border-solid border-black bg-mukund shadow-2xl h-28">
                <Header/>
                <ul className="flex-grow flex justify-center items-center space-x-6 text-xl text-white">
                  <li className="hover:bg-orange-600 hover:underline px-4 font-kuchbhi"><Link to ="/">Home</Link></li>
                  <li className="hover:bg-orange-600 hover:underline px-4 font-kuchbhi"><Link to ="/about">About</Link></li>
                  <li className="hover:bg-orange-600 hover:underline px-4 font-kuchbhi"><Link to = "/cart">Cart : {cart}</Link><i className ="bi bi-cart-dash-fill"></i></li>
                  <li className="hover:bg-orange-600 hover:underline px-4 font-kuchbhi"><Link to ="/contact">Contact us!</Link></li>
                  <li className="hover:bg-orange-600 hover:underline px-4 font-kuchbhi"><Link to ="/instamart">Instamart</Link></li>

                </ul>
                <div className="flex-grow flex items-center justify-end pr-7">
                <Link  to ='/login' className="text-white text-xl bg-blue-700 rounded-2xl px-9 py-2 font-kuchbhi font-semibold transition-colors duration-300 ease-in-out hover:bg-orange-700">
                <Login/>
               </Link> 
                </div> 
              </div>)
    }

    export default Header1


