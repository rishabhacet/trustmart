import React from "react";
import Link from "next/link";

const OrderNowButton = ({ code }) => {
  return (
    <div>
      <Link href="https://wa.me/918669168313?text=hello" target="_blank">
        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default OrderNowButton;
