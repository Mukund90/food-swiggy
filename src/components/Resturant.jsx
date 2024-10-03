import { useParams } from "react-router-dom";
import { Shimmer_effect } from "./Shimmer";
import { BASE_URL } from "./contants";
import Resturant_list from "./utils/useresturant";
import {useContext } from "react";
import Cartcontext from "./utils/Cartcontext";
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Restaurant = () => {
  const { id } = useParams();
  const restaurant = Resturant_list(id);

  // Access cart context
  const { cart, setcart } = useContext(Cartcontext);
  const {addcart,setaddcart} = useContext(Cartcontext);

  const handel1= (item)=>
  {
    setaddcart([...addcart,item])
  }

  // Function to handle adding items to the cart
  const handleSubmit = () => {
    setcart(cart + 1); // Increment cart count
  };

  return (
    <>
    
      <Menu/>
      
    <div className="p-6">
      {restaurant?.length > 0 ? (
        restaurant.map((item, index) => {
          const { name, description, imageId } = item;
          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center border-b border-black py-4 cursor-pointer"
            >
              <div className="w-2/3">
                <h2 className="text-2xl font-semibold mb-5">{name}</h2>
                <p className="text-xl text-gray-600">{description}</p>
              </div>

              <div className="w-1/3 flex flex-col items-center">
                {imageId && (
                  <>
                    <img
                      className="w-32 h-32 object-cover rounded-lg"
                      src={`${BASE_URL}${imageId}`}
                      alt={name}
                    />
                    <div className="mt-4">
                      <button
                        onClick={()=>
                        {
                          handleSubmit();  //count function will call..
                          handel1(item);   //items function will call...
                        }
                        }  // Attach the submit handler here
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <Shimmer_effect />
      )}
    </div>
    </>
  );
};

const Menu = ()=>
{ return (
  <h1 className="text-center cursor-pointer shadow-2xl p-5 text-6xl font-semibold border-2 border-solid  border-black  text-mukund mt-4"><i class="fas fa-utensils"></i>
    Menu-list</h1>
)
  
}