import datasources from "@/data-sources/data";
import DataSources from "@/components/data-sources";
import AlertBox from "@/components/alert-box";

export default function AddDataSourcePage() {
  return (
    <main>
      <div className="flex flex-col items-center">
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
        <form className="mb-4">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div>
        <DataSources data={datasources} />
      </div>
    </main>
  );
}
