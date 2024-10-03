import { Card } from "./Card.jsx";
import { useState, useEffect } from "react";
import { Shimmer_effect } from "./Shimmer.jsx";
import { filterdata } from "./utils/helper.jsx";
import { Link } from "react-router-dom";

const Body = () => {
    const [allresturant, setallresturant] = useState([]);
    const [Filteredcards, setFilteredcards] = useState([]); 
    const [searchtext, setsearchtext] = useState('');
    const [Trackedsearch, setrackedsearch] = useState(false);

   
    useEffect(() => {
        Getdata();
    }, []); 
    
    async function Getdata() {  
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            const restaurants = data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            setallresturant(restaurants);
            setFilteredcards(restaurants); 
        } catch (error) {
            console.log(`Internal server error: ${error}`);
        }
    }

    if (Filteredcards?.length === 0 && Trackedsearch) {
        return <h1>Filtered Restaurant Not Found</h1>;
    }

    return allresturant?.length === 0 ? (
        Array.from({ length: 10 }).map((_, index) => (
            <Shimmer_effect key={index} />
        ))
    ) : (
        <>   
            <div className="mt-5 mb-8 text-center">
                <input
                    type="text"
                    className="w-72 h-11  text-center py-6   text-md mr-5 border-2 border-black border-solid rounded-2xl"
                    placeholder="Search For Restaurant and Food...."
                    value={searchtext}
                    onChange={(e) => setsearchtext(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-600 p-3 text-white text-xl rounded-2xl text-center  px-6 font-semibold"
                    onClick={() => {
                        setrackedsearch(true);
                        const data = filterdata(searchtext, allresturant);
                        setFilteredcards(data); 
                    }}
                >
                    Click me
                </button>
            </div>

            <div className="card-container">
                {Filteredcards.length > 0 ? (
                    Filteredcards.map((item) => (
                        <Link key={item.info.id} to={`/restaurant/${item.info.id}`}>
                            <Card
                                clodinaryImageId={item.info.cloudinaryImageId}
                                name={item.info.name}
                                cuisines={item.info.cuisines}
                                costForTwo={item.info.costForTwo}
                                areaName={item.info.areaName}
                                avgRating={item.info.avgRating}
                             
                            />
                        </Link>
                    ))
                ) : (
                    <h2>No Restaurants Found</h2> 
                )}
            </div>
        </>
    );
};

export default Body;
