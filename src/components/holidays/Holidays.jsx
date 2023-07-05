import React from "react";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
const holidaysTitleArticle =
  "Surveys about what children want in a holiday context are few and far between. In an analysis initiated by the Danish Tourism Development Centre, German children in six focus groups were asked what they want from their holiday.";
const holidayImage1 = "https://i.ibb.co/BNscgCx/holiday-1.jpg";
const holidayImage2 =
  "https://i.ibb.co/G7r5RvT/damir-babacic-7-Eky-XZYe-Ysw-unsplash.jpg";
const holidayImage3 =
  "https://i.ibb.co/Yh7tcTz/nick-fewings-sf-MW7-4-NI-o-unsplash.jpg";
const holidayImage4 =
  "https://i.ibb.co/MpdF2n8/jaanus-jagomagi-Dymu1-Wi-ZVko-unsplash.jpg";
const holidayImage5 =
  "https://i.ibb.co/ZGWF5hM/datingscout-Bmf-XYr-Gq-KJw-unsplash.jpg";
const holidayImage6 =
  "https://i.ibb.co/rfz83Ck/robert-lukeman-RBcxo9-AU-U-unsplash.jpg";

const Holidays = () => {
  return (
    <section className="pt-32">
      {/* section title */}
      <SectionTitle
        title="Hassle-free holidays"
        details={holidaysTitleArticle}
      />

      {/* holiday blog */}
      <div className="theme-container pt-12">
        <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-7">
          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage1}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>

          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage2}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>
          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage3}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>

          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage4}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>

          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage5}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>

          {/* holiday blog 01 */}
          <div className="holiday-article-box">
            <img
              src={holidayImage6}
              alt="holiday blogs"
              className="rounded-t-2xl"
            />
            <article className="p-7">
              <h4 className="font-semibold text-xl">Activities in Bail</h4>
              <span className="text-gray-600">Indonesia</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holidays;
