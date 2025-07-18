import Side from "./Side";
import Topnav from "./Topnav";
import Task from "./Task";
function Index() {
  const uiComponents = [
  { name: "Home", icon: "bxs-alarm-exclamation" },
  { name: "My Tasks", icon: "bx-radio-circle-marked" },
  { name: "Projects", icon: "bx-duplicate" },
  { name: "Calendar", icon: "bx-table" },
  { name: "Help Center", icon: "bx-radio-circle-marked" },
  { name: "Settings", icon: "bx-duplicate" }
];

  return(
    <body className="bg-stone-300 w-[1652px] h-[1675px] rounded-[30px] p-5">
        <Side uiComponents={uiComponents} />
        <Topnav />
        <Task />
    </body>
  )
}
export default Index