import React from "react";
import Link from "next/link";

const BoardMembers = () => {
  return (
    <>
      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About TrustMart Gobal?
          </h2>

          <div className="flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0">
            <div className="flex flex-col items-center p-6 space-y-2 rounded-lg bg-gray-200 md:w-1/3">
              <img
                src="/assets/avatar-anisha.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">
                CA Akshat Tekariwal (Ex Saint Goabin)
              </h5>
              <h6 className="text-sm font-bold"> [Co founder and Director]</h6>
              <p className="text-sm text-black text-start">
                “Mr. Akshat along with his cousins started the Trustmart with
                the vision to supply Indian super quality products overseas at
                competitive price. Mr. Akshat is a young and dynamic
                entrepreneur focuses on activities of Sales & Marketing
                department. He is also a professional Tea Taster and having a
                vast knowledge in Tea Blending and valuation.”
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-2 rounded-lg bg-gray-200 md:w-1/3">
              <img
                src="/assets/avatar-ali.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">CA Saket Tekariwal</h5>
              <h6 className="text-sm font-bold"> [Co founder and Director]</h6>
              <p className="text-sm text-black text-start">
                “Mr Saket is also a professionally qualified Chartered
                Accountant.
                <br />
                He leads finance department of Trustmart, with responsibility
                for the overall financial management of the company, including
                accounting, balance sheet management, financial planning and
                analysis, corporate treasury, investor relations, corporate
                investments and tax. With his experience he also helps Trustmart
                to forecast monthly, quarterly and annual results. He is having
                a working knowledge in plastic and allied industries”
              </p>
            </div>

            <div className=" flex flex-col items-center p-6 space-y-2 rounded-lg  bg-gray-200 md:flex md:w-1/3">
              <img
                src="/assets/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">
                CA Nikita Tekariwal (Ex Delloite)
              </h5>
              <h6 className="text-sm font-bold"> [Co Founder and Director]</h6>
              <p className="text-sm text-black text-start">
                “Mrs. Nikita Tekariwal is also a professional qualified
                Chartered Accountant, responsible for giving strategic guidance
                and direction to Trustmart board to ensure that the company
                achieves its financial vision, mission, and long-term goals. His
                focused to maintain research and development programs to ensure
                that the company remains at the forefront in the industry,
                applies the most cost-effective methods and approaches with
                vision to Export premium quality products and services, and
                retains its competitive edge. In her early days Mrs. Nikita was
                working closely with major export promotion unites and is having
                a vast knowledge about Export Import business.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoardMembers;
