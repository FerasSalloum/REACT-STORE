import React from "react";
import { Fassets } from "../assets/frontend_assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={Fassets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            libero et id dignissimos laboriosam, reiciendis labore veritatis
            fugiat odio iusto adipisci amet? Id, iure repellat delectus quisquam
            quo facere cumque!
          </p>
        </div>
        <div >
            <p className="text-xl font-medium mb-5 uppercase">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5 uppercase">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-***-***_****</li>
                <li>**********@gmil.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
