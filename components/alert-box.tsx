import Image from "next/image";

type AlertBox = {
  type: "tip" | "alert"; // just one example of a way to make sure you limit the alert box types
  headingText: string;
  bodyText: string;
};

export default function AlertBox({ type, headingText, bodyText }: AlertBox) {
  const iconSrc = "/light-bulb-on.svg";
  return (
    <div className="flex flex-row bg-zinc-50 border border-color-zinc-200 rounded-lg p-4">
      <div className="mr-2 mt-1">
        <Image src={iconSrc} width="16" height="16" alt="alert icon" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-zinc-950 text-base font-medium">{headingText}</h4>
        <div className="text-sm text-zinc-950">{bodyText}</div>
      </div>
    </div>
  );
}
