function Side({uiComponents}) {
  return(
    <aside className="hidden md:flex fixed top-0 left-0 z-[1000] w-64 h-screen bg-slate-900 text-white p-6 flex-col rounded-ss-2xl">
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
            className="py-3 px-4 text-base font-medium text-white mb-2 cursor-pointer flex items-center gap-3 hover:bg-blue-600 rounded-lg transition-all"
          >
            <span className="text-xl">{comp.icon}</span>
            {comp.name}
          </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
export default Side