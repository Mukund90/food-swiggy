

const Apk = ()=>{
  return (
    <img className="w-96 h-96 object-cover p-10 "src="https://www.swiggy.com/about-us/wp-content/uploads/2024/04/DE-on-bike-2-2.png" alt="kuch hai" />
     
  ) 
}



const About = ()=>
{
    return (
        <div className="flex justify-center items-center flex-col ">
            <Apk/>
            <h1 className="text-6xl text-center px-10 text-red-700">Food <span className="text-orange-600">Villa</span></h1>
            <p className="text-black font-kuchbhi text-xl tracking-wider w-1/2 py-8 h-25 text-center mb-20  ">"Food Villa is a modern, customer-centric platform that brings culinary delights right to your doorstep, all accessible through a seamless and user-friendly app."</p>
       
       </div>
    )
}





export default About;
