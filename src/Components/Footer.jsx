import fotterlogo from "../assets/footerlogo.png";
import { MdFacebook } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className="bg-secondry  px-[4vw]">
        <div className="flex  py-[50px] justify-between">
          <div className="flex gap-3   flex-col">
            <img className="w-[20rem]" src={fotterlogo} alt="" />
            <p className="text-[1.1rem] text-[#d5decd]">
              {" "}
              Empowering learners through innovative digital education.
            </p>
          </div>
          <div className="flex text-white  text-3xl justify-center items-center gap-3.5">
            <MdFacebook className="hover:text-primary" />
            <CiTwitter className="hover:text-primary" />
            <FiYoutube className="hover:text-primary" />
            <FiInstagram className="hover:text-primary" />
            <FaLinkedin className="hover:text-primary" />
          </div>
        </div>
        <hr className="text-primary" />
        <div className="my-10 w-[100%] flex-wrap  justify-between md:flex">
          {/* left */}
          <div className="flex md:w-[55%] sm:flex-row flex-col gap-2 sm:justify-between ">
            {/* 1st col */}
            <div className="flex text-primary gap-[0.6rem] flex-col">
              <p className="text-[1.1rem] font-semibold">Our Address</p>
              <div className="flex  gap-3.5">
                <FaLocationDot className="text-[24px]" />
                <p className="text-white hover:text-primary text-[15.5px]">
                  {" "}
                  123 Address New York, USA
                </p>
              </div>
              <div className="flex  gap-3.5">
                <CiMail className="text-[24px]" />
                <p className="text-white hover:text-primary text-[15.5px]">
                  hello@LearnEase.com
                </p>
              </div>
              <div className="flex  gap-3.5">
                <IoCall className="text-[24px]" />
                <p className="text-white hover:text-primary text-[15.5px]">
                  +1 234 567 890
                </p>
              </div>
            </div>
            {/* 2nd col */}
            <div className="flex gap-[0.6rem] flex-col">
              <p className="font-bold text-[1.1rem] text-primary">
                Quick Links
              </p>
              <p className="text-white text-[16px]  hover:text-primary">Home</p>
              <p className="text-white text-[16px]  hover:text-primary">
                About Us
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Courses
              </p>
              <p className="text-white text-[16px]  hover:text-primary">FAQ</p>
              <p className="text-white text-[16px]  hover:text-primary">
                Contact
              </p>
            </div>
            {/* 3rd col */}
            <div className="flex gap-[0.6rem] flex-col">
              <p className="font-bold text-[1.1rem] text-primary">
                Courses Category
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Business Management
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Programming
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Creative Arts
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Digital Strategy
              </p>
              <p className="text-white text-[16px]  hover:text-primary">
                Contact
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center  gap-[1.5rem] lg:w-[35%] md:w-[45%] flex-col">
            <p className="text-4xl mt-5 md:mt-0 md:px-0   sm:px-20 text-center md:text-left font-medium text-primary">
              Join our newsletter to keep up to date with us!
            </p>
            <div className="flex p-[0.5vw]  rounded-4xl justify-between bg-white">
              <input
                className="  px-[1vw] py-[0.3rem] outline-0 focus:border-2 focus:border-green-100  rounded-2xl"
                type="text"
                placeholder="Email"
              />
              <p className="text-white hover:bg-secondry duration-400 bg-primary px-[1vw] py-2  rounded-4xl text-[1.2rem]">
                Subscribe
              </p>
            </div>
            <p className="text-white">
              Get the latest news about our updates and discounts
            </p>
          </div>
        </div>
        <hr className="text-primary" />
        <div className="py-5 text-white md:gap-[2.5vw] text-center font-medium flex flex-wrap  justify-center md:justify-between">
          {/* left */}
          <div> Copyright &copy; 2024 LearnEase | Powered by Alfatheme</div>
          {/* Right */}
          <div className="font-medium text-white flex gap-[1vw] md:gap-[1.8vw]">
            <div>Privayc Policy</div>
            <div className="md:block hidden">|</div>
            <div>Term Conditions</div>
            <div className="md:block hidden">|</div>

            <div>Cookies</div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Footer;
