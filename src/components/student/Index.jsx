import Side from "./Side";
import Topnav from "./Topnav";
import Task from "./Task";
import { AiFillHome } from "react-icons/ai";
import { MdTask, MdHelpOutline, MdSettings } from "react-icons/md";
import { FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";

function Index() {
const uiComponents = [
  { name: "Home", icon: <AiFillHome /> },
  { name: "My Tasks", icon: <MdTask /> },
  { name: "Projects", icon: <FaProjectDiagram /> },
  { name: "Calendar", icon: <FaCalendarAlt /> },
  { name: "Help Center", icon: <MdHelpOutline /> },
  { name: "Settings", icon: <MdSettings /> },
];


  return(
    <div className="bg-blue-50 w-full h-screen p-5">
        <Side uiComponents={uiComponents} />
        <Topnav />
        <Task />
    </div>
  )
}
export default Index