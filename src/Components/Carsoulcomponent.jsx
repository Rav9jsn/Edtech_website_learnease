import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div>
      <div className=" relative overflow-hidden">
        <div
          className="flex  transition ease-out duration-500"
          style={{ transform: `translateX(-${current * 10}%` }}
        >
          {slides.map((s, i) => {
            return <img key={i} className="" src={s} />;
          })}
        </div>

        <div className="absolute  top-0 flex justify-between h-full w-full text-2xl text-red-950 ">
          <button onClick={previousSlide}>
            {" "}
            <IoIosArrowDropleft className="cursor-pointer" />
          </button>
          <button onClick={nextSlide}>
            {" "}
            <IoIosArrowDropright className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="flex gap-3 mt-5 justify-center">
        {slides.map((s, i) => {
          return (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer bg-black ${
                current === i ? "bg-black" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
