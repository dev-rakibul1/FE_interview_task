import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="theme-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* footer part 01 */}
          <div className="">
            <article className="footer-article p-4">
              <h5 className="text-gray-900 font-semibold">Company</h5>
              <div className="footer-link mt-7">
                <Link to="/" className="text-gray-500 pt-2 block">
                  About
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Jobs
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  List your property
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Partnership
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Investor Relations
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Advertising
                </Link>
              </div>
            </article>
          </div>

          {/* footer part 02 */}
          <div className="">
            <article className="footer-article p-4">
              <h5 className="text-gray-900 font-semibold">Policies</h5>
              <div className="footer-link mt-7">
                <Link to="/" className="text-gray-500 pt-2 block">
                  Privacy & policy
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Terms of use
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Myvoiaj Rewards Terms
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Your privacy choice
                </Link>
              </div>
            </article>
          </div>

          {/* footer part 03 */}
          <div className="">
            <article className="footer-article p-4">
              <h5 className="text-gray-900 font-semibold">Help</h5>
              <div className="footer-link mt-7">
                <Link to="/" className="text-gray-500 pt-2 block">
                  Support
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Cancel your hotel or vacation rental booking
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Cancel you flight
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Refound timelines policies & processes
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  Use an Myvoiaj coupon
                </Link>
                <Link to="/" className="text-gray-500 pt-2 block">
                  International travel documents
                </Link>
              </div>
            </article>
          </div>
          {/* footer part 04 */}
          <div className="">
            <h5 className="text-gray-900 font-semibold">Explore</h5>
            <div className="footer-link mt-7">
              <p className="text-normal text-[15px] mt-2 text-gray-500">
                There is no question that Emirates Palace is one of the most
                luxurious hotels in Abu Dhabi.{" "}
              </p>
              <p className="text-normal text-[15px] mt-2 text-gray-500">
                Discover the must-try experiences the UAE offers with our
                comprehensive guide.
              </p>
              <p className="text-normal text-[15px] mt-2 text-gray-500">
                {" "}
                these 8 must-try activities will make your trip unforgettable.
                Don’t miss the opportunity to immerse yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer copy right */}
      <div className="footer-copyright theme-container text-center md:flex items-center justify-between py-7">
        <div className="copyright-text">
          <p className="text-gray-500">
            &copy; 2023 Myvoiaj an XYZ group company. All rights received.
          </p>
        </div>
        <div className="footer-social-icons mt-5 md:mt-0">
          <ul>
            <li className="flex items-center justify-center ml-4">
              <Link to="/" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaFacebookF />
              </Link>
              <Link to="/" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaTwitter />
              </Link>
              <Link to="/" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaInstagram />
              </Link>
              <Link to="/" className="text-gray-500 hover:text-gray-900">
                {" "}
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
