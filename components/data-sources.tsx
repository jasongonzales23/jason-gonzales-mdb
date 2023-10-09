// "use client";
import Image from "next/image";
import { FixedSizeGrid as Grid } from "react-window";
import { GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import selectedDatasourceAtom from "@/state/selected-datasource";
import { useAtom } from "jotai";

export type Data = {
  name: string;
  icon: string;
};
type DataSources = {
  data: Data[];
};

export default function DataSources({ data }: DataSources) {
  const GUTTER_SIZE = 20;
  const COLUMN_WIDTH = 188.8;
  const ROW_HEIGHT = 176;
  const COLUMN_COUNT = 5;
  const ROW_COUNT = Math.ceil(data.length / COLUMN_COUNT);

  const [selectedDatasource, setSelectedDatasource] = useAtom(
    selectedDatasourceAtom
  );

  const handleClick = (data: Data) => {
    console.log(data);
    setSelectedDatasource(data);
  };

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const idx = rowIndex * COLUMN_COUNT + columnIndex;
    if (!data[idx]) {
      return false;
    }
    return (
      <div
        style={{
          ...style,
          left: (style.left as number) + GUTTER_SIZE,
          top: style.top as number,
          width: (style.width as number) - GUTTER_SIZE,
          height: (style.height as number) - GUTTER_SIZE,
        }}
        className="flex flex-col items-center justify-center border rounded-lg border-zinc-200 text-zinc-800"
        onClick={() => {
          handleClick(data[idx]);
        }}
      >
        <Image
          width="64"
          height="64"
          src={`/${data[idx].icon}`}
          alt={`Icon for ${data[idx].name}`}
        />
        <div className="mt-5">{data[idx].name}</div>
      </div>
    );
  };

  return (
    <AutoSizer disableWidth>
      {({ height }) => (
        <Grid
          columnCount={COLUMN_COUNT}
          columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
          height={height}
          rowCount={ROW_COUNT}
          rowHeight={ROW_HEIGHT + GUTTER_SIZE}
          width={1044 + GUTTER_SIZE}
        >
          {Cell}
        </Grid>
      )}
    </AutoSizer>
  );
}
