import { Data } from "@/components/data-sources";
import { atom } from "jotai";

const selectedDatasourceAtom = atom({ name: "", icon: "" });

export default selectedDatasourceAtom;
