import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";

function Productitem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);
  return (
    <div>
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hiddend">
          <img
            src={image[0]}
            alt=""
            className="hover:scale-110 transition ease-in-out"
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
}

export default Productitem;
