import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { ShopContext } from "./shopContext";
import { Bounce, toast } from "react-toastify";

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const addTocart = async (itemId, size) => {
    if (!size) {
      toast.error("select Product Size", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      let cartData = structuredClone(cartItem);
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
      }
      setCartItem(cartData);
      toast.success("ADD TO CART", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      console.log("cartItem[items]:  ", cartItem[items]);
      for (const item in cartItem[items]) {
        console.log("cartItem[items][item]:  ", cartItem[items][item]);
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    console.log("cartItem:  ", cartItem);
    console.log("=".repeat(40));

    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addTocart,
    cartItem,
    getCartCount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
