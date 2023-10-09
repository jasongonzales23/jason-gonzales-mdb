import Image from "next/image";

export default function Dropdown() {
  return (
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
      type="button"
    >
      Filter by{" "}
      <Image
        className="w-2.5 h-2.5 fill-zinc-500 ml-2.5"
        src="/caret-down.svg"
        height="20"
        width="20"
        alt="search"
      />
    </button>
  );
}
