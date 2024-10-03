import { useRouteError } from "react-router-dom"
import Hey from './assets/Hey.png'



const Error =()=>
{
  
     const err = useRouteError();
     const{status,statusText} = err
    return (
        <div className="flex flex-col items-center justify-center"> 

        <div className="pt-10">
        <h2 className="text-4xl text-mukund font-kuchbhi font-bold">Oops......</h2>
        <h3 className="mt-5 text-2xl font-kuchbhi font-semibold text-left text-mukund">Something went wrong!!</h3>
        </div>

         <div className="mt-5">
         <img  className="w-full h-full object-cover "src= {Hey} alt="error!" />
         </div>

         <div className="mt-5">
         <h4 className="text-2xl font-kuchbhi text-mukund font-semibold text-left">Status : {status}  <span> StatusText: {statusText}</span></h4>
         </div>
           
       
            
        </div>
    )
}

export default Error