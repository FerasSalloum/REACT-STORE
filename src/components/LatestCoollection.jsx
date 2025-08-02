import React, { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import { useEffect } from "react";
import Productitem from "./Productitem";

function LatestCoollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setlatestProducts] = useState([]);
  useEffect(() => {
    setlatestProducts(products.slice(0, 10));
  },[]);
  return ( 
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Coollection"}></Title>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600\">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iure dignissimos quis quia. Iure nihil velit
        </p>
      </div>
      {/* rendaring productes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item,index)=>(
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}></Productitem>
          ))
        }
      </div>
    </div>
  );
}

export default LatestCoollection;
