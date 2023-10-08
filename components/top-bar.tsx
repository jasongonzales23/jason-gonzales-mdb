import ArrowLeft from "./arrow-left";

export default function TopBar() {
  const collapsedMargin = "ml-12";
  return (
    <nav className="fixed top-0 z-30 w-full bg-white border-b border-zinc-200">
      <div className="px-3 py-3.5 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div
            className={`${collapsedMargin} flex items-center justify-start text-sm`}
          >
            <span className="mr-2">
              <ArrowLeft />
            </span>
            <a href="#" className="text-zinc-600">
              Chat Project
            </a>
            <span className="text-titanium mx-2">&#47;</span>
            {/* make this a named style at least*/}
            <a href="#" className="text-zinc-900">
              Add datasource
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
