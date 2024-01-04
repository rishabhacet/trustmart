import OrderNowButton from "@/components/OrderNowButton";
import React from "react";

const CommericalProduct = () => {
  return (
    <>
      <div className="container mx-auto relative min-h-screen px-10">
        <div className="text-3xl font-bold mt-10 ">Commerical Product</div>

        <div className="grid grid-cols-1 mt-16">
          <div>
            <div className="text-xl font-bold">Silico Manganese</div>
          </div>
          <div className="grid grid-cols-1 sm:flex justify-between mt-10 space-x-4  order-1 space-y-2">
            <div>
              <div className="grid grid-cols-1">
                <div className="text-xl">
                  Silico Manganese is used mainly for steel making and comprises
                  of majority of our exports. We offer mainly two grades of SiMn
                  for exports. However, we are open to producing different
                  grades of SiMn based on our customer’s requirements. The 2
                  main grades we offer are:
                </div>
                <div className="mt-10 mb-10">
                  <table class="shadow-lg bg-white border-separate">
                    <tr>
                      <th class="bg-blue-100 border text-left px-8 py-4">MN</th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        60-65% Min
                      </th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        65-70% Min
                      </th>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">C</td>
                      <td class="border px-8 py-4">2.50% Max</td>
                      <td class="border px-8 py-4">2% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">Si</td>
                      <td class="border px-8 py-4">14-17% Max</td>
                      <td class="border px-8 py-4">16-18% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">P</td>
                      <td class="border px-8 py-4">0.30% Max</td>
                      <td class="border px-8 py-4">0.25% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">S</td>
                      <td class="border px-8 py-4">0.03% Max</td>
                      <td class="border px-8 py-4">0.03% Max</td>
                    </tr>
                  </table>
                </div>
                <OrderNowButton />
              </div>
            </div>

            <div>
              <img
                src="/ore/slica.png"
                alt=""
                className="h-[40vh] w-[100vw] object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-16">
          <div>
            <div className="text-xl font-bold">
              High Carbon Ferro Manganese{" "}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:flex justify-between mt-10 space-x-4 ">
            <div>
              <div className="grid grid-cols-1">
                <div className="text-xl">
                  HCFeMn is used in the production of both Steel and Foundry
                  products. We offer 3 grades of HC FeMn for export. However, we
                  are open to producing different grades of HC FeMn based on our
                  customer’s requirements. The 3 main grades we offer are:
                </div>
                <div className="mt-10 mb-10">
                  <table class="shadow-lg bg-white border-separate">
                    <tr>
                      <th class="bg-blue-100 border text-left px-8 py-4">MN</th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        60-70% Min
                      </th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        70-75% Min
                      </th>
                      <th class="bg-blue-100 border text-left px-8 py-4">
                        75-78% Min
                      </th>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">C</td>
                      <td class="border px-8 py-4">6% to 8% Max</td>
                      <td class="border px-8 py-4">6% to 8% Max</td>
                      <td class="border px-8 py-4">7% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">Si</td>
                      <td class="border px-8 py-4">1.50% Max</td>
                      <td class="border px-8 py-4">1.50% Max</td>
                      <td class="border px-8 py-4">1.20% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">P</td>
                      <td class="border px-8 py-4">0.30% Max</td>
                      <td class="border px-8 py-4">0.30% Max</td>
                      <td class="border px-8 py-4">0.25% Max</td>
                    </tr>
                    <tr>
                      <td class="border px-8 py-4">S</td>
                      <td class="border px-8 py-4">0.03% Max</td>
                      <td class="border px-8 py-4">0.03% Max</td>
                      <td class="border px-8 py-4">0.03% Max</td>
                    </tr>
                  </table>
                </div>
                <OrderNowButton />
              </div>
            </div>

            <div>
              <img
                src="/ore/ferro.png"
                alt=""
                className="h-[40vh] w-[100vw] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-10 overflow-hidden min-h-[100px] sm:min-h-[200px] bg-gray-100 flex justify-start mx-auto items-start ">
        <div className="container mx-auto px-10 mt-10 ">
          <div className="text-xl font-bold mb-5">Services:</div>
          <div>
            <ul className="list-disc space-y-4 font-bold">
              <li> Quality Control System, 100% Satisfaction Guarantee </li>
              <li> Highly Professional Staff, Accurate Testing Processes</li>
              <li> Unrivalled workmanship, Professional and Qualified</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommericalProduct;
