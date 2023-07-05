import React from "react";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import "./Destinations.css";
const destinationsTitleDetails =
  "Enjoy the most beautiful and fabulous places on Sao Tome and Principe. Visit the spectacular beaches and breathtaking mountains with picturesque villages, refreshing waterfalls and friendly people.";
const tour1 =
  "https://i.ibb.co/C6knxVB/claus-grunstaudl-OGlk6y-Zo-J-k-unsplash.jpg";
const tour2 = "https://i.ibb.co/9ngT746/robert-bye-Lq-ZJf4ukqz0-unsplash.jpg";
const tour3 =
  "https://i.ibb.co/0yL5Rkh/ana-paula-grimaldi-hol3-Lfg-HLD0-unsplash.jpg";
const tour4 =
  "https://i.ibb.co/TLDzqjZ/nick-fewings-a30-DGL2-WST0-unsplash.jpg";
const tour5 = "https://i.ibb.co/Drf9VCN/ryan-cheng-Envfrlm-Axfg-unsplash.jpg";
const tour6 = "https://i.ibb.co/Tt359rG/tour-1.jpg";

const Destinations = () => {
  return (
    <div>
      {/* Destination title */}
      <section>
        <SectionTitle
          title="Popular Destinations"
          details={destinationsTitleDetails}
        />

        {/* destination details */}
        <div className="theme-container mt-12">
          <div className="md:grid grid-cols-7 gap-4 h-full">
            <div className="col-span-4 h-full relative destination-article-box">
              <img src={tour3} alt="Tour" className=" rounded-xl h-full" />

              <div className="destination-article p-7 text-white">
                <h4 className="text-md font-thin">Dubai</h4>
                <p className="text-xl font-semibold">United arab emirate</p>
              </div>
            </div>
            <div className="col-span-3 max-w-full w-full  mt-4 md:mt-0">
              <div className="w-full flex flex-col max-w-full gap-4">
                <div className=" relative destination-article-box rounded-2xl">
                  <img
                    src={tour1}
                    alt="Tour"
                    className=" rounded-xl max-w-[100%] w-full"
                  />
                  <div className="destination-article p-7 text-white">
                    <h4 className="text-md font-thin">Dubai</h4>
                    <p className="text-xl font-semibold">United arab emirate</p>
                  </div>
                </div>
                <div className="relative destination-article-box">
                  <img
                    src={tour2}
                    alt="Tour"
                    className=" rounded-xl max-w-full"
                  />
                  <div className="destination-article p-7 text-white">
                    <h4 className="text-md font-thin">Dubai</h4>
                    <p className="text-xl font-semibold">United arab emirate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* destination bottom part */}
          <div className="w-full md:flex mt-4 gap-4">
            <div className="max-w-full md:w-1/2 bg-gray-200 relative destination-article-box">
              <img src={tour4} alt="Tour" className=" rounded-xl h-full" />
              <div className="destination-article p-7 text-white">
                <h4 className="text-md font-thin">Dubai</h4>
                <p className="text-xl font-semibold">United arab emirate</p>
              </div>
            </div>
            <div className="max-w-full md:w-1/2 bg-gray-300 mt-4 md:mt-0 relative destination-article-box">
              <img src={tour5} alt="Tour" className=" rounded-xl h-full" />
              <div className="destination-article p-7 text-white">
                <h4 className="text-md font-thin">Dubai</h4>
                <p className="text-xl font-semibold">United arab emirate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
