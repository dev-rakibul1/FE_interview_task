import React from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./Choose.css";
const sectionTitleDetails =
  "Apple Inc. is an American multinational technology company headquartered in Cupertino, California. Apple is the world's largest technology company by revenue.";
const choseImage2 = "https://i.ibb.co/wpN4Qhx/choose-2.png";
const choseImage1 = "https://i.ibb.co/gTp58kz/choose-1.png";
const choseImage3 = "https://i.ibb.co/gZW4Lfd/choose-3.png";

const Choose = () => {
  return (
    <section className="choose-area">
      <div className=" theme-container text-white">
        {/* section title */}
        <SectionTitle
          title="Why choose MYVOIAJ"
          details={sectionTitleDetails}
        />

        {/* choose details */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7 py-14 pb-32">
          {/* box 01 */}
          <div className="choose-box bg-white p-4 rounded-xl">
            <img src={choseImage1} alt="choose" />
            <h4 className="text-gray-900 font-semibold text-xl py-4">
              Best price Guarantee
            </h4>
            <p className="text-gray-600 pb-7 text-[15px]">
              They come from a family of plants called Musa that are native to
              Southeast Asia and grown in many of the warmer areas of the world.
              Bananas are a healthy source of fiber, potassium, vitamin B6,
              vitamin C, and various antioxidants and phytonutrients. Many types
              and sizes exist.
            </p>
          </div>
          {/* box 02 */}
          <div className="choose-box bg-white p-4 rounded-xl">
            <img src={choseImage2} alt="choose" />
            <h4 className="text-gray-900 font-semibold text-xl py-4">
              The best selection
            </h4>
            <p className="text-gray-600 pb-7 text-[15px]">
              They come from a family of plants called Musa that are native to
              Southeast Asia and grown in many of the warmer areas of the world.
              Bananas are a healthy source of fiber, potassium, vitamin B6,
              vitamin C, and various antioxidants and phytonutrients. Many types
              and sizes exist.
            </p>
          </div>
          {/* box 03 */}
          <div className="choose-box bg-white p-4 rounded-xl">
            <img src={choseImage3} alt="choose" />
            <h4 className="text-gray-900 font-semibold text-xl py-4">
              Lowest Price
            </h4>
            <p className="text-gray-600 pb-7 text-[15px]">
              They come from a family of plants called Musa that are native to
              Southeast Asia and grown in many of the warmer areas of the world.
              Bananas are a healthy source of fiber, potassium, vitamin B6,
              vitamin C, and various antioxidants and phytonutrients. Many types
              and sizes exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
