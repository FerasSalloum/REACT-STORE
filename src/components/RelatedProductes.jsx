import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Productitem from "./Productitem";
import Title from "./Title";

function RelatedProductes({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [relted, setRelted] = useState([]);
  const reltedProducts = () => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => item.category == category);
      productsCopy = productsCopy.filter(
        (item) => item.subCategory == subCategory
      );
      setRelted(productsCopy.slice(0, 5));
    }
  };
  useEffect(() => reltedProducts(), [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relted.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedProductes;
