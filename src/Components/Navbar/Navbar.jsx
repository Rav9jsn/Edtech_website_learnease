import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="px-[2vw]">
        <div className="flex justify-between items-center p-[2vw]">
          <img src={Logo} alt="Logo" className="w-[250px]" />
          <div className="lg:block hidden">
            <ul className="flex  font-semibold  text-[16px]">
              <NavLink to={"/"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">Home</li>
              </NavLink>
              <NavLink to={"/About"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">About Us</li>
              </NavLink>
              <NavLink to={"/Courses"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">Courses</li>
              </NavLink>
              <NavLink to={"/Pages"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">Pages</li>
              </NavLink>
              <NavLink to={"/News"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">News</li>
              </NavLink>
              <NavLink to={"/ContactUs"}>
                {" "}
                <li className="tb:px-[20px] px-[7.5px]">Contact Us</li>{" "}
              </NavLink>
            </ul>
          </div>
          <div className=" lg:flex hidden  gap-0.5">
            <button className="px-[2.6vw] py-[18px] border-[1px] font-semibold text-[#37472b] text-[16px] rounded-[15px] bg-[#F8F9F5] border-black">
              Sign Up
            </button>
            <button className="px-[2.6vw]   text-[14px] py-[14px] border-[1px] font-semibold rounded-[15px] bg-[#AFD275] text-[#2F4021] border-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
