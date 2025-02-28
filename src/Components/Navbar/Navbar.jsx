import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/Logo.png";
import ShLogo from "../../assets/ShLogo.png";
import { useState } from "react";
import Mobilenavbar from "./Mobilenavbar";

const Navbar = () => {
  const [navmob, setNavmob] = useState(false);
  const [mC, setmC] = useState(false);
  const [subcourse, setSubcourse] = useState(false);
  const [removenav, setRemovenav] = useState(false);
  return (
    <>
      <div onMouseLeave={() => setSubcourse(false)}>
        <div className="flex bg-white  justify-between items-center p-[2vw]">
          <img
            src={Logo}
            alt="Logo"
            className="w-[250px] cursor-pointer md:block st:hidden "
          />
          <img
            src={ShLogo}
            alt="Logo"
            className="w-[45px] cursor-pointer md:hidden st:block "
          />
          <div className="lg:block hidden">
            {" "}
            <ul className="flex cursor-pointer relative font-semibold  text-[16px]">
              <NavLink to={"/"}>
                {" "}
                <li className="tb:px-[20px] px-[5px] hover:text-[#afd275]">
                  Home
                </li>
              </NavLink>
              <NavLink to={"/About"}>
                {" "}
                <li className="tb:px-[20px] hover:text-[#afd275] px-[5px]">
                  About Us
                </li>
              </NavLink>
              <Link>
                {" "}
                <li
                  onMouseEnter={() => setSubcourse(true)}
                  onClick={() =>
                    subcourse ? setSubcourse(false) : setSubcourse(true)
                  }
                  className="tb:px-[20px] hover:text-[#afd275] px-[5px]"
                >
                  Courses{" "}
                  <FaChevronDown
                    onClick={() =>
                      subcourse ? setSubcourse(false) : setSubcourse(true)
                    }
                    className="text-[12px]  inline pb-0.5"
                  />
                </li>
              </Link>
              {subcourse && (
                <ul className="bg-[#AFD275] absolute  top-[50px] left-[200px] p-[20px] text-me rounded-2xl text-[#37472b] text-[16px] ">
                  <Link to={"/Coursescatalog"}>
                    <li className="hover:text-white relative ">
                      Courses Catalog
                    </li>
                  </Link>
                  <Link to={"/Coursedetails"}>
                    <li className="hover:text-white ">Courses Detail</li>
                  </Link>
                </ul>
              )}
              <NavLink to={"/Pages"}>
                {" "}
                <li className="tb:px-[20px] hover:text-[#afd275] px-[5px]">
                  Pages
                </li>
              </NavLink>
              <NavLink to={"/News"}>
                {" "}
                <li className="tb:px-[20px] hover:text-[#afd275] px-[5px]">
                  News
                </li>
              </NavLink>
              <NavLink to={"/ContactUs"}>
                {" "}
                <li className="tb:px-[20px] hover:text-[#afd275] px-[5px]">
                  Contact Us
                </li>{" "}
              </NavLink>
            </ul>
          </div>
          <div className="lg:hidden block ">
            <button
              onClick={() => {
                setNavmob(!navmob), setmC(!mC), setRemovenav(!removenav);
              }}
              className="focus:text-[#afd275] "
            >
              {!mC && <GiHamburgerMenu className="text-[24px]" />}
            </button>
            <button
              className="focus:text-[#afd275] "
              onClick={() => {
                setNavmob(!navmob), setmC(!mC), setRemovenav(!removenav);
              }}
            >
              {mC && <GrClose className="text-[24px]" />}
            </button>
          </div>
          <div className=" lg:flex hidden  gap-0.5">
            <button className="px-[2.6vw] py-[18px] hover:border-[#afd275] cursor-pointer hover:text-[#afd275] border-[1px] font-semibold text-[#37472b] text-[16px] rounded-[15px] bg-[#F8F9F5] border-black">
              Sign Up
            </button>
            <button className="px-[2.6vw] hover:bg-[#37472b] duration-200 cursor-pointer hover:text-[#afd275]  text-[16px] py-[14px] border-[1px] font-semibold rounded-[15px] bg-[#AFD275] text-[#2F4021] border-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Mobilenavbar
        navmob={navmob}
        subcourse={subcourse}
        setSubcourse={setSubcourse}
        setNavmob={setNavmob}
        setmC={setmC}
        removenav={removenav}
        setRemovenav={setRemovenav}
      />
    </>
  );
};

export default Navbar;
