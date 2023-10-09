"use client";
import { useState } from "react";
import datasources from "@/data-sources/data";
import DataSources from "@/components/data-sources";
import AlertBox from "@/components/alert-box";
import Image from "next/image";

export default function AddDataSourcePage() {
  const SCROLL_WINDOW_OFFSET = 344;
  const [filteredData, setFilteredData] = useState(datasources);
  const handleChange = (evt: React.ChangeEvent) => {
    const input = evt.target as HTMLInputElement;
    const value = input.value.toLowerCase();
    const filtered = datasources.filter((d) =>
      d.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <main>
      <div
        className={`flex flex-col items-center h-[calc(100vh-${SCROLL_WINDOW_OFFSET}px)]`}
      >
        <h2 className="mb-2 text-xl text-black font-semibold">
          Select your datasource
        </h2>
        <h3 className="mb-8 text-l text-zinc-600">
          Don&apos;t see what you&apos;re looking for? Make a request
        </h3>
        <div className="mb-4 w-[1024px]">
          <AlertBox
            type="tip"
            headingText="Pro Tip!"
            bodyText="Write datasource name in the editor to print the form template."
          />
        </div>
        <form className="mb-4 flex flex-row justify-between w-[1024px]">
          <div className="w-[320px]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Image
                  className="w-3 h-3 fill-zinc-500"
                  src="/search-icon.svg"
                  height="20"
                  width="20"
                  alt="search"
                />
              </div>
              <input
                onChange={handleChange}
                type="search"
                id="search"
                className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-gray-900 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Filter by{" "}
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </form>
        {/** Put a nice separator here with a subtle border or shadow */}
        <DataSources data={filteredData} />
      </div>
    </main>
  );
}
