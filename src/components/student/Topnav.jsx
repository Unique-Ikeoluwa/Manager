import { CiSearch } from "react-icons/ci"
import { FaHeadphones } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
function Topnav(){
  return(
    <nav className="fixed right-0 top-0 w-full md:w-[86.1%] bg-slate-200 px-4 md:px-10 py-4 h-20 md:h-24 rounded-tr-2xl flex justify-between items-center z-50">
      <div className="md:hidden min-w-0 flex items-center justify-between w-full">
        <div className="flex items-center gap-2 text-blue-500">
          <img src="src/assets/Images/spacelogo.png" className="size-10" alt="logo" />
          <span>
            TRACKER
            <p className="text-gray-400 text-sm">design@unique.co</p>
          </span>
        </div>

        <div className="flex gap-4 flex-shrink items-center">
          <button>
            <IoMdNotifications className="text-xl font-bold text-black"/>
          </button>
          <button>
            <FaHeadphones className="text-xl font-bold text-black"/>
          </button>
          <div className="flex gap-1 items-center">
            <img src="src/assets/Images/CEO.jpg" alt="User" className="size-8 rounded-full object-cover" />
            <button>
              <FaAngleDown className="text-xl font-bold text-black"/>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="block w-[300px] h-[60.55px] relative rounded-xl shadow-sm overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-grey-400">
            <CiSearch />
          </button>
          <input type="text" placeholder="search task..." className="focus:outline-none border-none w-full h-full pl-20 text-xl text-[#939898] bg-transparent font-normal"/>
        </div>
        <div className="flex gap-10 items-center">
          <div className="flex gap-4">
            <button>
              <IoMdNotifications className="text-xl font-bold text-black"/>
            </button>
            <button>
                <FaHeadphones className="text-xl font-bold text-black"/>
            </button>
          </div>
          <div className="lg:block w-[300px] h-[60.55px] hidden relative rounded-xl shadow-sm overflow-hidden">
            <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-grey-400">
              <FaCalendarAlt />
            </button>
            <input type="text" placeholder="Sunday, March 25 " className="focus:outline-none border-none w-full h-full pl-20 text-xl text-[#939898] bg-gray-100 font-normal"/>
            <button className="absolute size-16 border-none rounded-l-xl top-0 right-0 text-3xl flex justify-center items-center text-grey-400">
              <FaAngleDown />
            </button>
          </div>
          <div className="flex gap-1 items-center">
            <img src="src/assets/Images/CEO.jpg" alt="User" className="size-8 rounded-full object-cover" />
            <button>
                <FaAngleDown className="text-xl font-bold text-black"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Topnav