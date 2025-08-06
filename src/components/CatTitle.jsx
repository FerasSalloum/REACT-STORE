import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";

function CatTitle() {
  const { currency, delivery_fee, getTotalAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getTotalAmount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getTotalAmount() === 0 ? " " : getTotalAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
}

export default CatTitle;
