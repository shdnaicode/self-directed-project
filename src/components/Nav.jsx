import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const iconClass =
  "absolute left-3 top-1/2 -translate-y-1/2 text-[22px] text-black text-opacity-60";

const navClass =
  "left-0 top-0 z-50 w-full border-b-[1.3px] border-black/35 bg-white p-4";

const ulClass =
  "flex items-center justify-start gap-5 text-[15px] font-normal text-black text-opacity-80 ml-5";

const inputClass =
  "placeholder-black/60 text-black bg-white w-96 h-12 rounded-md pl-11 font-normal border border-black/30";

const searchClass = "text-sm font-normal text-black text-opacity-60";

export default function Nav() {
  return (
    <>
      <nav className={`${navClass} fixed flex items-center justify-between`}>
        <ul className={ulClass}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Learning</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <div
          className={`${searchClass} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <IoMdSearch className={iconClass} />
          <input
            type="text"
            aria-label="Search course..."
            placeholder="Find your course..."
            className={inputClass}
          />
        </div>

        <div className="mr-5 flex items-center gap-5">
          <div className="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
          <IoIosArrowDown className="text-[25px] text-black text-opacity-60" />
        </div>
      </nav>
    </>
  );
}
