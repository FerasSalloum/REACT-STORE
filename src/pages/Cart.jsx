import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "../components/Title";

function Cart() {
  const { products, currency, cartItem } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    let tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">{cartData.map((item,index) => {
        const productData = products.find((product)=>product._id === item._id)
        return(
          <div key={index} className="py-4 border-b border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr-2fr-0.5fr] items-center gap-4">
            <div className="flex items-start gap-6">
              <img src={productData.image[0]} alt="" className="w-16 sm:w-20"/>
              <div>
                <p className="text-sm sm:text-lg font-medium">{productData.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>{currency}{productData.price}</p>
                  <p className="px-2 sm:px-3 py-1 border bg-slate-50">{item.size}</p>
                </div>
              </div>

            </div>
          </div>
        )
      })}

      </div>
    </div>
  );
}

export default Cart;
