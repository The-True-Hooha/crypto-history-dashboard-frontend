import React from "react";
import Facebook from "../public/assets/facebook.svg";
import Twitter from "../public/assets/twitter.svg";
import Instagram from "../public/assets/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-green-500 pt-2 pb-24">
      <div className="md:px-[160px]">
        <h1 className="font-bold  text-2xl mt-6"> Crypto History </h1>
        <p className="text-white mt-2 font-mono font-semibold">
          {" "}
          Crypto HIstory is blockchain company that offers unique services with
          high better market rates.
        </p>
      </div>
      <div className="max-w-screen-xl w-full mx-auto px-6 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="flex w-full mt-2 mb-8 mx-2">
          <div className="">
            <Facebook viewBox="10 -5 24 60" />
          </div>
          <div>
            <Twitter viewBox="10 -5 24 60" />
          </div>
          <div>
            <Instagram viewBox="10 -5 24 60" />
          </div>
        </div>
        <div className="row-span-2 flex sm:col-span-2 sm:col-start-7 sm:col-end-9 flex-col mt-5">
          <p className="text-black font-bold text-lg"> Product </p>
          <l1 className="my-2 text-white font-semibold hover:text-black cursor-pointer transition-all">
            Subscribe{""}
          </l1>
          <l1 className="mt-[-10px] text-white font-semibold hover:text-black cursor-pointer transition-all">
            Networks{""}
          </l1>
          <l1 className="text-white font-semibold hover:text-black cursor-pointer transition-all">
            Pricing
          </l1>
          <l1 className="text-white font-semibold hover:text-black cursor-pointer transition-all">
            Locations
          </l1>
          <l1 className="text-white font-semibold hover:text-black cursor-pointer transition-all">
            Blog
          </l1>
          <l1 className="text-white font-semibold hover:text-black cursor-pointer transition-all">
            Partners
          </l1>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col mt-5">
            <p className="text-black mb-4 font-bold text-lg"> Engage </p>
            <ul className="text-white font-semibold">
            <li className="mt-[-5px] hover:text-black cursor-pointer transition-all">
              Community {" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col mt-5">
          <p className="text-black-600 mb-4 font-bold text-lg">Earn Money</p>
          <ul className="text-white font-semibold">
            <li className=" hover:text-black cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className=" hover:text-black cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
