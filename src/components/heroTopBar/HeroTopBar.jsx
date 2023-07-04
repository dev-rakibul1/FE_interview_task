import React from "react";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const HeroTopBar = () => {
  return (
    <div className="bg-black text-gray-400 py-2">
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2	xl:grid-cols-2 theme-width">
        {/* hero top bar left */}
        <div className="heroTopBarLeft flex items-center justify-start">
          <a
            href="tel:555 1234567"
            className="flex justify-center items-center"
          >
            <span className="flex justify-center items-center">
              <MdOutlineCall className="text-xl" />{" "}
              <span className="ml-2">+1 555 1234567</span>
            </span>
          </a>
          <a href="mailto:info@gmail.com" className="ml-7">
            <span className="flex justify-center items-center">
              <MdOutlineEmail className="text-xl" />{" "}
              <span className="ml-2">info@gmail.com</span>
            </span>
          </a>
        </div>
        {/* hero top bar right */}
        <div className="heroTopBarRight ml-auto">
          <span className="mr-7">Currency: AFD</span>
          <span>Language: FN</span>
        </div>
      </div>
    </div>
  );
};

export default HeroTopBar;
