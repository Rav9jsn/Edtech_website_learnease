import React from "react";
import pic1 from "../../assets/reviewphoto/pic1.jpeg";
import pic2 from "../../assets/reviewphoto/pic2.jpg";
import pic3 from "../../assets/reviewphoto/pic3.jpeg";
import pic4 from "../../assets/reviewphoto/pic4.jpg";
import pic5 from "../../assets/reviewphoto/pic5.jpg";
import bgHero from "../../assets/hi.png";
import { CgNotes } from "react-icons/cg";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { IoIosPeople } from "react-icons/io";

const Home = () => {
  const text = {
    fontSize: 64,
    color: "#4ff0b7",
  };
  const HTMLContent = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()));

    useEffect(() => {
      const controls = animate(count, 100, { duration: 5 });
      return () => controls.stop();
    }, []);

    return <motion.pre style={text}>{rounded}</motion.pre>;
  };
  return (
    <>
      <img src={bgHero} className=" absolute bg-[#eceeeab3]" alt="" />
      <div className="  bg-cover relative gap-[2.5rem]  flex px-[4vw] mt-[100px] w-[100%]">
        <div className="flex flex-col justify-start gap-[1.5rem]  max-w-[50%]">
          <div className="flex flex-col text-[#2F4021] font-bold text-[70px] leading-16">
            <p>Unlock Your Future</p>
            <p>with</p>
            <p>Online Learning</p>
          </div>
          <p className="text-[#2F4021] text-[19px]">
            Discover a wide range of expert-led courses tailored to your
            personal and professional growth. Learn at your own pace, access
            resources anytime, and unlock new opportunities with flexible,
            high-quality education designed for modern learners.
          </p>
          <div className="flex gap-3  ">
            <button className="px-[40px] py-[18px] hover:bg-secondry hover:text-primary duration-300 bg-primary rounded-2xl font-semibold text-secondry ">
              {" "}
              Browse Courses
            </button>
            <button className="px-[40px] py-[18px] border-primary border-[1px] duration-300 hover:border-secondry hover:text-secondry rounded-2xl font-semibold text-primary ">
              Learn More
            </button>
          </div>
          <div className="flex relative">
            <img
              className="w-17 rounded-full border-[5px] border-white "
              src={pic1}
              alt=""
            />
            <img
              className="w-17 rounded-full absolute left-[48px] border-[5px] border-white "
              src={pic2}
              alt=""
            />
            <img
              className="w-17 rounded-full absolute left-[96px] border-[5px] border-white "
              src={pic3}
              alt=""
            />
            <img
              className="w-17 rounded-full absolute left-[144px] border-[5px] border-white "
              src={pic4}
              alt=""
            />
          </div>
        </div>{" "}
        <div className="max-w-[50%]">
          <div className="flex gap-4">
            <img src={pic5} className="w-70 rounded-4xl" alt="" />
            <div className="p-[40px] grid grid-cols-2 gap-14 bg-secondry rounded-3xl">
              <div className="flex flex-col item-center  ">
                <IoIosPeople className="text-primary self-center mb-2.5 text-4xl" />
                <p className="font-semibold self-center text-primary text-4xl">
                  1,027
                </p>
                <p className="px-[20px] py-0.5 bg-primary rounded-4xl">
                  Student
                </p>
              </div>
              <div className="flex flex-col  ">
                <CgNotes className="text-primary self-center mx-[12px] mb-2.5 text-4xl" />
                <p className="font-semibold self-center text-primary text-4xl">
                  105
                </p>
                <p className="px-[20px] font-semibold py-0.5 bg-primary rounded-4xl">
                  Courses
                </p>
              </div>
              <div className="flex flex-col item-center  ">
                <CgNotes className="text-primary self-center mx-auto mb-2.5 text-4xl" />
                <p className="font-semibold self-center text-primary text-4xl">
                  587
                </p>
                <p className="px-[20px] py-0.5 bg-primary rounded-4xl">
                  Teacher
                </p>
              </div>
              <div className="flex flex-col item-center  ">
                <IoIosPeople className="text-primary self-center mx-auto mb-2.5 text-4xl" />
                <p className="font-semibold self-center text-primary text-4xl">
                  347
                </p>
                <p className="px-[20px] py-0.5 bg-primary rounded-4xl">
                  Certified
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
