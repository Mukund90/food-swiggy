import {useState,useEffect} from 'react'




const Resturant_list = (id) =>
{
     const[resturant , setresturant] = useState([]);  //custom-hok created:

     useEffect(()=>
    {
        fetching();
    },[])

    
    async function fetching()
    {
     
     const response = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&submitAction=ENTER`)
       if(response.ok)
       {
         console.log('fetched data sucessfully:');
         const data = await response.json();
         const result = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
         if(result)
         {
            const items = result.map((item)=>({
               name : item?.card?.info?.name,
               description : item?.card?.info?.description,
               imageId : item?.card?.info?.imageId,
            }));
            setresturant(items);   //updating the state ..
            
            
         }
         
       }else{
         console.log('fetched data unsucessfully:')
       }
    }
    
    return resturant;

}
export default Resturant_list;