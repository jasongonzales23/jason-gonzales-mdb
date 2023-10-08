type Data = {
  name: string;
  icon: string;
};
type DataSources = {
  data: Data[];
};
export default function DataSources({ data }: DataSources) {
  const dataSources = data.map((item) => (
    <div
      className="flex flex-col items-center justify-center w-[188.8px] h-44 border rounded-lg border-zinc-200 text-zinc-800"
      key={item.name}
    >
      {item.name}
    </div>
  ));
  return (
    <div className="gap-5 flex flex-row items-center justify-center flex-wrap mx-auto w-[1024px]">
      {dataSources}
    </div>
  );
}
