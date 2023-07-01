import React from "react";
import Feedback from "./feedback";
import { Badge } from "@/components/ui/badge";
import PGBar from "./pgbar";

type Props = {};

export default function Score({}: Props) {
  return (
    <div className="w-[225px] flex-col items-center gap-5 flex justify-center border-r px-2">
     <PGBar value={90} />
      <div className="flex flex-col">
        <Badge className="text-base rounded-b-none" variant={"outline"}>
            GradeAI Feedback
        </Badge>
       <Feedback/>
       </div>
    </div>
  );
}
