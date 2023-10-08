import Image from "next/image";

type Data = {
  name: string;
  icon: string;
};
type DataSources = {
  data: Data[];
};
export default function DataSources({ data }: DataSources) {
  const iconPath = "/components/logos/";
  const dataSources = data.map((item) => (
    <div
      className="flex flex-col items-center justify-center w-[188.8px] h-44 border rounded-lg border-zinc-200 text-zinc-800"
      key={item.name}
    >
      <Image
        width="64"
        height="64"
        src={`/${item.icon}`}
        alt={`Icon for ${item.name}`}
      />
      <div className="mt-5">{item.name}</div>
    </div>
  ));
  return (
    <div className="gap-5 flex flex-row items-center justify-center flex-wrap mx-auto w-[1024px]">
      {dataSources}
    </div>
  );
}
