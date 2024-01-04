import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "FMCG Product",
    link: "/product",
  },
  {
    id: 3,
    name: "Commerical Product",
    link: "/commericalProduct",
  },
];

const NavBarHeader = () => {
  return (
    <>
      <div className=" bg-primary/40 py-3">
        <div className="container mx-auto ">
          <div className=" sm:flex grid  grid-cols-1   justify-between px-10">
            <div className="sm:flex  gap-8  grid-col-1 justify-start">
              <div className=" mr-0">
                <div className=" hover:text-cyan-800 cursor-pointer">
                  <div className=" flex items-center text-gray">
                    <FaMapMarkerAlt className="w-4 h-5 mr-1" />
                    <h1 className="m-0">Madhya Pradesh</h1>
                  </div>
                </div>
              </div>

              <div className=" mr-0">
                <div className=" hover:text-cyan-800 cursor-pointer">
                  <div className=" flex items-center text-gray">
                    <IoCall className="w-4 h-5 mr-1" />
                    <h1 className="m-0">+91-9876543212</h1>
                  </div>
                </div>
              </div>
              <div className=" mr-0">
                <div className=" hover:text-cyan-800 cursor-pointer">
                  <div className=" flex items-center text-gray">
                    <MdEmail className="w-4 h-5 mr-1" />
                    <h1 className="m-0">trustMartGlobla@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-between">
              <div className=" mr-0">
                <div className=" hover:text-cyan-800 cursor-pointer">
                  <div className="items-center">
                    <FaFacebookF className="w-4 h-5 mr-1" />
                  </div>
                </div>
              </div>

              <div className=" mr-0">
                <div className=" hover:text-cyan-800 cursor-pointer">
                  <div className="items-center">
                    <FaInstagram className="w-4 h-5 mr-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex px-10 items-center text-2xl font-bold hover:cursor-pointer">
            <Image
              src="/assets/logo.png" // Path to the image from the public directory
              alt="Description of your image"
              width={50} // Set the width of the image
              height={50} // Set the height of the image
            />
            TrustMart Global
          </div>
        </Link>
        <div>
          <div data-aos="zoom-in" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="https://wa.me/918669168313?text=hello"
                target="_blank"
              >
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Inquiry Now
                </button>
              </Link>
            </div>
            <div className="sm:hidden">kasflkaslkdfj</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarHeader;
