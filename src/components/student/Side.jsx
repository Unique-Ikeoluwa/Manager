function Side({uiComponents}) {
    return(
        <aside className="fixed top-0 left-0 z-[1000] w-1/5 h-screen bg-[#ebebec] p-6 rounded-s-2xl flex flex-col font-['Plus_Jakarta_Sans']">
  <div className="mb-6 text-lg flex items-center gap-1 text-blue-500">
    <img src="src/assets/Images/spacelogo.png" className="size-12" alt="logo" />
    <span>TRACKER<p className="text-gray-400 text-sm">design@unique.co</p></span>
  </div>

  <div className="py-4"></div>

  <div>
    <ul className="list-none">
  {uiComponents.map((comp, idx) => (
    <li
      key={idx}
      className="py-3 px-4 text-xl font-medium text-gray-600 mb-2 cursor-pointer flex items-center gap-5 hover:bg-[#2a3a4b] hover:shadow-md hover:text-[#f6f7f8]"
    >
      <i className={`bx ${comp.icon} text-[25px]`}></i>
      {comp.name}
    </li>
  ))}
</ul>

  </div>
</aside>
    )
}
export default Side