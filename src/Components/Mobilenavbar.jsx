import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";

const Mobilenavbar = ({
  navmob,
  setmC,
  setNavmob,
  setRemovenav,
  removenav,
}) => {
  const [downArrow, setDownArrow] = useState(false);

  return (
    <div>
      {navmob && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }} // Animation duration of 1 second
          className=" absolute w-[100%] lg:hidden block rounded-3xl md:mt-[48px] bg-[#AFD275] "
        >
          {" "}
          {removenav && (
            <ul className="flex p-[10px] py-[20px] gap-[1rem]  flex-col  font-semibold  text-[#40532D]  text-[16px]">
              <Link to={"/"}>
                {" "}
                <li
                  onClick={() => {
                    setRemovenav(!removenav), setmC(false), setNavmob(!navmob);
                  }}
                  className="px-[7.5px] hover:text-white"
                >
                  Home
                </li>
              </Link>
              <Link to={"/About"}>
                {" "}
                <li
                  onClick={() => {
                    setRemovenav(!removenav), setmC(false), setNavmob(!navmob);
                  }}
                  className=" hover:text-white  px-[7.5px]"
                >
                  About Us
                </li>
              </Link>
              <Link>
                {" "}
                <li
                  onClick={() =>
                    downArrow ? setDownArrow(false) : setDownArrow(true)
                  }
                  className="px-[7.5px] hover:text-white  flex items-center"
                >
                  Courses{" "}
                  <FaChevronDown className="ml-0.5 pt-1 font-bold text-[15px]" />
                </li>
              </Link>
              {downArrow && (
                <ul className="bg-[#AFD275] relative  gap-1 px-[15px] text-me rounded-2xl text-[#37472b] text-[16px] ">
                  <Link to={"/Coursescatalog"}>
                    <li
                      onClick={() => {
                        setRemovenav(!removenav),
                          setmC(false),
                          setNavmob(!navmob),
                          setDownArrow(false);
                      }}
                      className="hover:text-white my-3"
                    >
                      Courses Catalog
                    </li>
                  </Link>
                  <Link to={"/Coursedetails"}>
                    <li
                      onClick={() => {
                        setRemovenav(!removenav),
                          setmC(false),
                          setNavmob(!navmob),
                          setDownArrow(false);
                      }}
                      className="hover:text-white my-3"
                    >
                      Courses Detail
                    </li>
                  </Link>
                </ul>
              )}
              <Link to={"/Pages"}>
                {" "}
                <li
                  onClick={() => {
                    setRemovenav(!removenav), setmC(false), setNavmob(!navmob);
                  }}
                  className=" hover:text-white px-[7.5px]"
                >
                  Pages
                </li>
              </Link>
              <Link to={"/News"}>
                {" "}
                <li
                  onClick={() => {
                    setRemovenav(!removenav), setmC(false), setNavmob(!navmob);
                  }}
                  className=" hover:text-white px-[7.5px]"
                >
                  News
                </li>
              </Link>
              <Link to={"/ContactUs"}>
                {" "}
                <li
                  onClick={() => {
                    setRemovenav(!removenav), setmC(false), setNavmob(!navmob);
                  }}
                  className=" hover:text-white px-[7.5px]"
                >
                  Contact Us
                </li>{" "}
              </Link>
            </ul>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Mobilenavbar;
