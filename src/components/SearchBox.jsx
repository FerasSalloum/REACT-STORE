import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { Fassets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

function SearchBox() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location.pathname]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 mx-5 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-none outline-none bg-inherit text-sm"
        />
        <img src={Fassets.search_icon} alt="" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={Fassets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
}

export default SearchBox;
