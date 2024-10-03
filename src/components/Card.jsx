import { BASE_URL } from "./contants";

export const Card = ({ clodinaryImageId, name, cuisines, costForTwo,areaName, avgRating}) => {
    const imageURL = `${BASE_URL}${clodinaryImageId}`; 

 

    return (
        
        <div className="inline-block shadow-2xl w-80 h-96 overflow-hidden hover:border-2 border-solid border-black rounded-t-lg rounded-b-lg my-6 mx-6 bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={imageURL} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 h-48 flex flex-col justify-between">
                <h2 className="text-center text-xl py-2 font-kuchbhi text-black font-semibold truncate">{name}</h2>
                <h3 className="text-center  py-1  font-kuchbhi truncate">{cuisines?.join(', ')}</h3>
                <h4 className="text-center  py-1 font-kuchbhi text-red-600 truncate">{costForTwo}</h4>
                 <h5 className="text-center py-1  font-kuchbhi truncate">{areaName}</h5>
                <h6 className="text-center font-kuchbhi py-1 text-yellow-300 text-xl font-semibold truncate"> Rating : { avgRating } <i className="bi bi-star-half"></i><i className="bi bi-star-half"></i><i className="bi bi-star-half"></i></h6>
            </div>
        </div>
        
    );
};
                     



