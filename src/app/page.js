"use client";

import Image from "next/image";
import image1 from "../../public/assets/hero/women.png";
import image2 from "../../public/assets/hero/sale.png";
import image3 from "../../public/assets/hero/shopping.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopRatingProduct from "@/components/TopRatingProduct";
import BoardMembers from "@/components/BoardMembers";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

const slides = [
  {
    id: 1,
    image: "/image/7.jpg",
    title: "Upto 50% off on all Spices",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 2,
    image: "/assets/hero/sale.png",
    title: "Upto 50% off on all Pules",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center mt-5  duration-200 ">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...sliderSettings}>
            {slides.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      className="text-sm"
                    >
                      {data.description}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Link href="https://wa.me/917987590357" target="_blank">
                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                          Order Now
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.image}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* About TrustMart */}

      <section id="hero">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-left md:text-5xl md:text-left">
              TrustMart Global
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              We are a group of young and dynamic CA’s from India. Trustmart is
              having its head office in Nagpur and having 2 branch offices in
              Balaghat and Gondia respectively. We export mainly wheat flour
              (Atta), spices, rice including both basmati & non-basmati
              (customized packing), Indian groceries items, branded packed food
              items, soya chunks & many more from India.
              <br />
              <br />
              <h1 className="text-xl font-bold"> Other Firms : </h1>
              <br />
              <ul className="list-disc space-y-4 font-bold text-sm">
                <li>
                  Manish Tea Company- Gondia (Swastik Brand Tea) Tea Packetter
                  and wholeseller
                </li>
                <li>
                  Ashish Marketing- Balaghaat Wholesale FMCG and Hardware
                  business (Nestle, Pidilite, J&J Wagh Bakri Tea etc)
                </li>
                <li> M/s Chandak Tekariwal and accosiates- Nagpur</li>
              </ul>
            </p>
          </div>

          <div className="md:w-1/2">
            <img src="/assets/illustration-intro.png"></img>
          </div>
        </div>
      </section>
      {/* Product List Page for the  */}
      <TopRatingProduct />
      <BoardMembers />
    </>
  );
}
