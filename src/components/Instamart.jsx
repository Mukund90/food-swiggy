import { Edible_oil } from "./contants";
import { Fresh_Fruits } from "./contants";
import { Fresh_vegetable } from "./contants";
import { meat_fresh } from "./contants";
import { Cleaning_essentail } from "./contants";
import { Instamrt_banner } from "./contants";
import Play from './assets/Play.jpg'
import App from './assets/App.jpg'
import Mobile from './assets/Mobile.jpg'

 const Instamart = ()=>
{
  return (
    <>
    <div className="pt-10">
     <img className="w-full h-96 object-cover  shadow-2xl " src={Instamrt_banner} alt="grocerry" />
    </div>
    <SmallCards/>
    <Playstore/>
    </>
    
  )
}


const SmallCards = () => {
  return (
  
    <div className="flex items-center justify-center flex-row pt-10 pb-10 cursor-pointer px-10  ">
      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10 ">
        <img className="w-full h-75 object-cover  " src={Fresh_vegetable} alt="Fresh Vegetables" />
        <h3 className="text-center text-2xl pt-5  font-kuchbhi font-semibold">Fresh Vegetables</h3>
      </div>

      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10">
        <img className="w-full h-75 object-cover" src={Fresh_Fruits} alt="Fresh Fruits" />
        <h3 className="text-center text-2xl pt-5 font-kuchbhi font-semibold">Fresh Fruits</h3>
      </div>

      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10">
        <img className="w-full h-75 object-cover" src={Edible_oil} alt="Edible Oil" />
        <h3 className="text-center text-2xl  pt-5 font-kuchbhi font-semibold">Edible Oil</h3>
      </div>

      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10">
        <img className="w-full h-75 object-cover" src={Cleaning_essentail} alt="Cleaning Essentials" />
        <h3 className="text-center text-2xl  pt-5 font-kuchbhi font-semibold">Cleaning Essentials</h3>
      </div>

      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10">
        <img className="w-full h-75 object-cover" src={meat_fresh} alt="Cleaning Essentials" />
        <h3 className="text-center text-2xl  pt-5 font-kuchbhi font-semibold">Meat</h3>
      </div>
      <div className="border-2 border-solid border-black pb-10 rounded-3xl w-65 h-96 mr-10">
        <img className="w-full h-75 object-cover" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_294/NI_CATALOG/IMAGES/CIW/2024/4/2/90d94613-6a3f-4f86-b0ce-bff84443f18e_1934c92e-b882-463d-95f8-8a6b9a2aeb78" alt="Cleaning Essentials" />
        <h3 className="text-center text-2xl pt-5 font-kuchbhi font-semibold">Atta</h3>
      </div>
    </div>

   
  );
};


const Playstore = ()=>
{
  return (
    <div className="flex flex-row items-center bg-foot justify-between gap-20 bg px-20 mx-10 h-96">
      <div className="cursor-pointer">
      <h1 className="text-4xl font-kuchbhi font-bold px-12 text-left">For Better Experienced Download <br/>The Food-Villa Apk</h1>
      <div className="flex pt-5">
          <img
            className="w-1/3 pl-10"
            src={Play}
            alt="apk"
          />
          <img
            className="w-1/3 pl-10"
            src={App}
            alt="iphone"
          />
        </div>
      </div>
      <div className="pt-36">
      <img className="w-full h-1/2 object-cover" src={Mobile} alt="download" />
      </div>
      
    </div>
  )
}

export default Instamart;



