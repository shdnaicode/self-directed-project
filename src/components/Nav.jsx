import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Nav() {
  
  const navUser = {
    profilePicture: "",
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b-[1.3px] border-black/35 bg-white p-4">
        <ul className="ml-5 flex items-center justify-start gap-5 text-[15px] font-normal text-black text-opacity-80">
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-normal text-black text-opacity-60">
          <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[22px] text-black text-opacity-60" />
          <input
            type="text"
            aria-label="Search course..."
            placeholder="Find your course..."
            className="h-12 w-96 rounded-md border border-black/30 bg-white pl-11 font-normal text-black placeholder-black/60"
          />
        </div>

        <div className="mr-5 flex items-center gap-5">
          <img className="h-[40px] w-[40px] rounded-full bg-gray-300" src={navUser.profilePicture} alt="Profile Picture"></img>
          <IoIosArrowDown className="text-[25px] text-black text-opacity-60" />
        </div>
      </nav>
    </>
  );
}
