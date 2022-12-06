import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-semibold">Model 3</h1>
        <p className="p-2 text-sm">
          <a href="https://www.tesla.com/drive">
            <span className="underline hover:underline-offset-4 cursor-pointer">
              Schedule a Test Drive
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[17%]">
        <a href="https://www.tesla.com/model3/design">
          <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
            Custom Order
          </button>
        </a>
        <a href="https://www.tesla.com/inventory/new/m3">
          <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2">
            Existing Inventory
          </button>
        </a>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <FiChevronDown size={24} />
      </div>
    </div>
  );
};

export default Model;
