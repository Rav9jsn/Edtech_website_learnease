import React from "react";
import pic1 from "../../assets/reviewphoto/pic1.jpeg";
import pic2 from "../../assets/reviewphoto/pic2.jpg";
import pic3 from "../../assets/reviewphoto/pic3.jpeg";
import pic4 from "../../assets/reviewphoto/pic4.jpg";
import pic5 from "../../assets/reviewphoto/pic5.jpg";
import pic6 from "../../assets/reviewphoto/pic6.jpeg";
import bgHero from "../../assets/hi.png";
import { FaUserGraduate } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { GrCertificate } from "react-icons/gr";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import { IoIosPeople } from "react-icons/io";

const Home = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, 1027, { duration: 1 });
    return () => controls.stop();
  }, []);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(() => Math.round(count2.get()));
  useEffect(() => {
    const controls = animate(count2, 105, { duration: 1 });
    return () => controls.stop();
  }, []);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(() => Math.round(count3.get()));
  useEffect(() => {
    const controls = animate(count3, 587, { duration: 1 });
    return () => controls.stop();
  }, []);

  const count4 = useMotionValue(0);
  const rounded4 = useTransform(() => Math.round(count4.get()));
  useEffect(() => {
    const controls = animate(count4, 347, { duration: 1 });
    return () => controls.stop();
  }, []);

  return (
    <>
      <div className=" overflow-x-hidden backdrop-blur-2xl bg-[url('https://theme.vividusmockup.com/learnease/wp-content/uploads/sites/3/2024/10/bg.png')] bg-cover relative sm:gap-[3rem] gap-[3rem]  text-white  flex flex-col sm:flex-row   px-[4vw] lg:mt-[100px] w-[100%]">
        <div className="flex flex-col justify-start gap-[1.8rem] w-[100%] sm:max-w-[48%]">
          <div className="flex flex-col text-[#2F4021] sm:font-[700] font-[800] md:text-[70px] sm:text-[50px] text-[35px] md:leading-20 sm:leading-15 leading-10 ">
            <p>Unlock Your Future</p>
            <p>with</p>
            <p>Online Learning</p>
          </div>
          <p className="text-[#2F4021] bg-white rounded-3xl   text-start text-[19px]">
            Discover a wide range of expert-led courses tailored to your
            personal and professional growth. Learn at your own pace, access
            resources anytime, and unlock new opportunities with flexible,
            high-quality education designed for modern learners.
          </p>
          <div className="flex gap-3  ">
            <button className="md:px-[40px] px-[14px] py-[8px] md:py-[18px] hover:bg-secondry hover:text-primary duration-300 bg-primary rounded-2xl font-semibold text-secondry ">
              {" "}
              Browse Courses
            </button>
            <button className="md:px-[40px] px-[14px] py-[8px] md:py-[18px] border-primary border-[1px] duration-300 hover:border-secondry hover:text-secondry rounded-2xl font-semibold text-primary ">
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
        <div className="relative w-[100%] sm:max-w-[50%]">
          <div className="flex tb:flex-row flex-col lg:justify-between items-center justify-center gap-4">
            <img
              src={pic5}
              className="tb:w-[18vw]  sm:w-[30vw] st:w-[14rem] rounded-4xl"
              alt=""
            />
            <div className="sm:p-[2.6vw] p-[7vw] grid grid-cols-2 sm:gap-[55px] gap-[65px]  bg-secondry rounded-3xl">
              <div className="flex flex-col item-center  ">
                <IoIosPeople className="text-primary self-center mb-2.5 text-4xl" />
                <motion.p className="font-semibold self-center text-primary text-4xl">
                  {rounded}
                </motion.p>
                <p className="tb:px-[20px] text-center font-semibold text-secondry py-0.5 bg-primary  rounded-4xl">
                  Student
                </p>
              </div>
              <div className="flex flex-col  ">
                <CgNotes className="text-primary self-center mx-[12px] mb-2.5 text-4xl" />
                <motion.p className="font-semibold self-center text-primary text-4xl">
                  {rounded2}
                </motion.p>
                <p className="tb:px-[20px] px-[12px] text-secondry font-semibold py-0.5 bg-primary rounded-4xl">
                  Courses
                </p>
              </div>
              <div className="flex flex-col item-center  ">
                <FaUserGraduate className="text-primary self-center mx-auto mb-2.5 text-4xl" />
                <motion.p className="font-semibold self-center text-primary text-4xl">
                  {rounded3}
                </motion.p>
                <p className="tb:px-[20px] px-[12px] py-0.5 font-semibold text-secondry bg-primary rounded-4xl">
                  Teacher
                </p>
              </div>
              <div className="flex flex-col item-center  ">
                <GrCertificate className="text-primary self-center mx-auto mb-2.5 text-4xl" />
                <motion.p className="font-semibold self-center text-primary text-4xl">
                  {rounded4}
                </motion.p>
                <p className="tb:px-[20px] px-[12px] font-semibold text-secondry py-0.5 bg-primary rounded-4xl">
                  Certified
                </p>
              </div>
            </div>
          </div>
          <div className="flex tb:top-[19.52vw]  top-[17rem] left-[5rem] sm:top-[33vw] tb:left-[-60px] bg-white absolute gap-[70px] px-[8px] py-[2px] rounded-4xl ">
            <div className="flex relative">
              <img
                className="w-12 rounded-full border-[5px] border-white "
                src={pic1}
                alt=""
              />

              <img
                className="w-12 rounded-full absolute left-[34px] border-[5px] border-white "
                src={pic4}
                alt=""
              />
              <img
                className="w-12 rounded-full absolute left-[68px] border-[5px] border-white "
                src={pic2}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-secondry">17K+</p>
              <p className="font-bold text-secondry">Student</p>
            </div>
          </div>
          <div className="flex relative lg:mt-[50px] mt-[30px] lg:gap-[2rem] gap-[1rem] flex-col p-[30px] rounded-3xl bg-white">
            <p className="lg:text-[28px] text-[20px] lg:pr-[130px] lg:pl-[20px] font-semibold text-secondry ">
              "This platform offers everything I need to boost my skills."
            </p>
            <p className="sm:hidden md:block md:text-5xl lg:text-9xl text-8xl font-extrabold  absolute lg:right-[80px] right-[60px] top-[100px] text-gray-400">
              ,,
            </p>
            <img
              src={pic6}
              className="rounded-full relative  sm:left-[-60px] lg:w-[5rem] w-[4rem]"
              alt=""
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
