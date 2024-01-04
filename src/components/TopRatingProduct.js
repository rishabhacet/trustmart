"use client";
import React from "react";
import { useRouter } from "next/navigation";
const ProductsData = [
  {
    id: 1,
    img: "/image/108.jpg",
    title: "Tea",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "/image/106.jpg",
    title: "Basmati Rice",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/image/3.jpg",
    title: "MoongDaal",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "/image/4.jpg",
    title: "Red Chilli",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
];

const oreData = [
  {
    id: 1,
    img: "/ore/ferro.png",
    title: "High Carbon Ferro Manganese",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "/ore/slica.png",
    title: "Silico Manganese",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
];

const TopRatingProduct = () => {
  const router = useRouter();
  return (
    <>
      <div className="text-center mt-10 mb-10 text-2xl font-bold">
        Top Rating Products
      </div>
      <div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4  place-items-center gap-5">
          {/* card section */}
          {ProductsData.map((data) => (
            <div
              class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
              key={data.id}
            >
              <img
                class="h-64 w-full object-cover object-center"
                src={data.img}
                alt="Product Image"
              />
              <div class="p-4">
                <h2 class="mb-2 text-lg font-medium  text-gray-900">
                  {data.title}
                </h2>
              </div>
            </div>

            //    <div
            //       data-aos="fade-up"
            //       data-aos-delay={data.aosDelay}
            //       key={data.id}
            //       className="space-y-3 border-2	rounded-md	shadow-lg w-[300px] "
            //     >
            //       <img
            //         src={data.img}
            //         alt=""
            //         className="h-[320px] w-[250px] object-cover rounded-md"
            //       />
            //       <div>
            //         <h3 className="font-semibold">{data.title}</h3>
            //       </div>
            //     </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/product")}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
          >
            View All
          </button>
        </div>
      </div>

      {/* Commerical Products */}

      <div className="text-center mt-10 mb-10 text-2xl font-bold">
        Commerical Products
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center space-y-4">
          {/* card section */}
          {oreData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3"
            >
              <img
                src={data.img}
                alt=""
                className="h-[40vh] w-[60vh] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* view all button */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/commericalProduct")}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
          >
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default TopRatingProduct;
