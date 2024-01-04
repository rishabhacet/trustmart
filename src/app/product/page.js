"use client";

import OrderNowButton from "@/components/OrderNowButton";
import { ScrollToTop } from "@/components/ScrollToTop";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../../db/data";

const category = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "WholeSpices",
  },
  {
    id: 3,
    title: "GroundSpices",
  },
  {
    id: 4,
    title: "Pluses",
  },
  {
    id: 5,
    title: "Cooking Oil",
  },
  {
    id: 6,
    title: "Ghee",
  },
  {
    id: 7,
    title: "Flours",
  },
  {
    id: 8,
    title: "Fasting Product (Upvas ke saman)",
  },
  {
    id: 9,
    title: "Rice Products",
  },
  {
    id: 10,
    title: "Dry Fruits",
  },
  {
    id: 11,
    title: "Salt&Sugar",
  },

  {
    id: 12,
    title: "Tea",
  },
];

const Product = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [allProduct, setAllProduct] = useState(data);
  const [searchItem, setSearchItem] = useState("");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  const filterResult = (item) => {
    if (item === "All") {
      setAllProduct(data);
    } else {
      const result = data.filter((curData) => {
        return curData.category.toLowerCase() === item.toLowerCase();
      });

      setAllProduct(result);
    }
  };

  const getSearchData = (val) => {
    setSearchItem(val.target.value);

    const result = data.filter((curData) => {
      return curData.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setAllProduct(result);
  };
  return (
    <>
      <div className="container mx-auto mt-10 px-10 sm:flex justify-between items-center grid-cols-1 space-y-2">
        <h1 className="text-3xl font-bold"> FMCG Products</h1>
        {/* <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search Product"
            onChange={getSearchData}
          />
          <button className="text-white absolute right-2.5 bottom-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div> */}
      </div>
      <div className="container mx-auto grid sm:grid-cols-[20%_auto] mt-10 justify-between items-start">
        <div className="hidden sm:grid grid-cols-1 px-10 gap-y-4">
          <div className="text-xl font-bold"> Category</div>
          {category.map((value) => {
            return (
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 border-2 border-blue-500 focus:ring-2 focus:ring-blue-500 h-5 w-5"
                  checked={selectedOption === value.title}
                  onChange={() => {
                    filterResult(value.title);
                    handleRadioChange(value.title);
                  }}
                  key={value.id}
                />
                <label className="ml-2">{value.title}</label>
              </div>
            );
          })}
        </div>
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 px-10 sm:px-4 gap-8 mt-10">
          {allProduct.map((value) => {
            return (
              <div className="shadow-lg border-1 rounded-md	">
                <div className="relative w-40 h-40 sm:w-64 sm:h-64">
                  <Image src={value.img} alt="" fill className=" rounded-lg" />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2"> {value.title}</div>
                  <OrderNowButton />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Product;
