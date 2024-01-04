import React from "react";

import Banner from "../../public/assets/website/footer-pattern.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Link from "next/link";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "FMCG Product",
    link: "/product",
  },
  {
    title: "Commerical",
    link: "/commericalProduct",
  },
];
const Footer = () => {
  return (
    <>
      <div className="">
        <div className="text-white bg-[url('/assets/website/footer-pattern.jpg')] bg-cover w-[100%] h-[100%]  bg-bottom bg-no-repeat  	mt-10 ">
          <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
              {/* company details */}
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                  <img src="/assets/logo.png" alt="" className="max-w-[50px]" />
                  TrustMart Global
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  in beatae ea recusandae blanditiis veritatis.
                </p>
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                  <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                      Important Links
                    </h1>
                    <ul className="flex flex-col gap-3">
                      {FooterLinks.map((link) => (
                        <li
                          className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                          key={link.title}
                        >
                          <Link
                            href={link.link}
                            className="inline-block px-4 hover:text-primary duration-200"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div></div>

                {/* social links */}

                <div>
                  <div className="flex items-center gap-3 mt-6">
                    <a href="#">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaFacebook className="text-3xl" />
                    </a>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center gap-3">
                      <FaLocationArrow />
                      <p>Madhya Pradesh</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <FaMobileAlt />
                      <p>+91 123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
