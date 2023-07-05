import React from "react";
import { MdSend } from "react-icons/md";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="mt-32">
      {/* Section title */}
      <SectionTitle
        title="Enjoy Exclusive Benefits"
        details="Sign up and we will send the best deals to you"
      />

      {/* subscribe area */}
      <div className="theme-container mt-12">
        <div className="md:max-w-[75%] ml-auto mr-auto">
          <div className="subscribe-area w-full max-w-full flex items-center justify-center">
            <input type="search" placeholder="Enter you email..." />
            <span className="subscribe-btn-icon cursor-pointer">
              <MdSend className="text-2xl text-primary" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
