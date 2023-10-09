import Image from "next/image";
import { ChangeEventHandler } from "react";

type ImputType = {
  handler: ChangeEventHandler<HTMLInputElement>;
};
export default function Input({ handler }: ImputType) {
  return (
    <>
      <label
        htmlFor="search"
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
          onChange={handler}
          type="search"
          id="search"
          className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </>
  );
}
