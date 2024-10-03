import { useContext } from "react";
import Cartcontext from "./utils/Cartcontext";

const Cart = () => {
  const { cart, setcart } = useContext(Cartcontext);
  const {addcart,setaddcart} = useContext(Cartcontext)



  const clearcart = () => {
    setcart(0);   
    setaddcart([]); 
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-4xl py-10 font-bold font-kuchbhi">
          Cart Items: {cart} <i className="bi bi-cart-plus"></i>
        </h2>
        <h3 className="text-center text-3xl font-kuchbhi tracking-wider">
          {cart > 0 ? `You have ${cart} items in your cart.` : `Cart is empty, add items to the cart`}
        </h3>
        {addcart.map(item => (
       <div key={item.id}>
        <ul className="list-disc list-outside pl-4">
        <li className="text-2xl mt-5  cursor-pointer text-center font-kuchbhi font-bold mb-2 text-mukund hover:underline">{item.name}</li></ul>
        </div>
         // Assuming each item has an 'id' and 'name'
      ))}

      </div>
      
      <div className="flex flex-wrap justify-center space-x-4 mt-10">
         {/* //order button */}
        <button
          className="text-center mb-10 text-2xl font-kuchbhi font-semibold bg-green-600 py-4 px-16 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-green-700 hover:shadow-xl focus:ring-4 focus:ring-green-300"
          onClick={() => {
            alert('Order placed successfully!');
            setcart(0);
            clearcart();

          }}
        >
          Order
        </button>

       {/* clearbutton */}
        <button
          className="text-center text-2xl  mb-10 font-kuchbhi font-semibold bg-red-600 py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-red-700 hover:shadow-xl focus:ring-4 focus:ring-red-300"
          onClick={clearcart}
        >
          Clear Cart
          <i class="bi bi-x"></i></button>
      </div>
    </>
  );
};

export default Cart;
