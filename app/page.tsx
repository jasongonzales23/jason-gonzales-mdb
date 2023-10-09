"use client";
import { useState } from "react";
import datasources from "@/data-sources/data";
import DataSources from "@/components/data-sources";
import AlertBox from "@/components/alert-box";
import Image from "next/image";
import { useAtom } from "jotai";
import selectedDatasourceAtom from "@/state/selected-datasource";
import Input from "@/components/input";
import Dropdown from "@/components/dropdown";

export default function AddDataSourcePage() {
  const [filteredData, setFilteredData] = useState(datasources);
  const [selectedDatasource, setSelectedDatasource] = useAtom(
    selectedDatasourceAtom
  );
  const handleChange = (evt: React.ChangeEvent) => {
    const input = evt.target as HTMLInputElement;
    const value = input.value.toLowerCase();
    const filtered = datasources.filter((d) =>
      d.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const handleClearState = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setSelectedDatasource({ name: "", icon: "" });
    setFilteredData(datasources);
  };

  // This constant is reused for the main container layout
  const MAIN_CONTAINER_WIDTH = 1024;
  // This constant is used to set the height of the virtual window
  const SCROLL_WINDOW_OFFSET = 334;

  return (
    <main>
      {!selectedDatasource.name ? (
        <div className={`flex flex-col items-center`}>
          <h2 className="mb-2 text-xl text-black font-semibold">
            Select your datasource
          </h2>
          <h3 className="mb-8 text-l text-zinc-600">
            Don&apos;t see what you&apos;re looking for? Make a request
          </h3>
          <div
            style={{ width: `${MAIN_CONTAINER_WIDTH}px` }}
            className={`mb-4`}
          >
            <AlertBox
              type="tip"
              headingText="Pro Tip!"
              bodyText="Write datasource name in the editor to print the form template."
            />
          </div>
          <form
            style={{ width: `${MAIN_CONTAINER_WIDTH}px` }}
            className={`mb-4 flex flex-row justify-between`}
          >
            <div className="w-[320px]">
              <Input handler={handleChange} />
            </div>
            <Dropdown />
          </form>
          <div style={{ height: `calc(100vh - ${SCROLL_WINDOW_OFFSET}px)` }}>
            <DataSources data={filteredData} />
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center`}>
          <p className="mb-2 text-m text-black font-semibold">You selected</p>
          <h2 className="mb-2 text-xl text-black font-semibold">
            {selectedDatasource.name}
          </h2>
          <div>
            <Image
              width="64"
              height="64"
              src={`/${selectedDatasource.icon}`}
              alt={`selectedDatasource.name`}
            />
          </div>
          <button
            className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-8"
            onClick={handleClearState}
          >
            Choose another Datasource
          </button>
        </div>
      )}
    </main>
  );
}
