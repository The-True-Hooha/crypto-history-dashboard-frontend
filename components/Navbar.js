import Link from "next/link";
import React from "react";
import Logo from "../public/assets/Logo.svg";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-green-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 col-start-1 col-end-2 flex items-center">
              <h1 className="text-black font-bold text-xl hidden lg:block h-8 w-auto">
                Crypto History
              </h1>
              <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                  Testimonials
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                  Features
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                  Pricing
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                  About
                </button>
                <button className="px-6 text-black py-2 font-bold mx-8 cursor-pointer inline-block relative font-mono">
                  {" "}
                  Contact
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
