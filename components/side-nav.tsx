import NavItems from "./nav-items";

export default function SideNav() {
  const collapsedWidth = "w-12";

  return (
    <aside
      id="logo-sidebar"
      className={`${collapsedWidth} fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full bg-white border-r border-zinc-200 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full pb-4 overflow-y-auto bg-white ">
        <NavItems />
      </div>
    </aside>
  );
}
