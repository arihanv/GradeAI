import React from "react";
import Feedback from "./feedback";
import { Badge } from "@/components/ui/badge";

type Props = {};

export default function Score({}: Props) {
  return (
    <div className="w-[225px] flex-col items-center gap-5 flex justify-center border-r px-2">
      <div className="radial-progress text-blue-500" style={{ "--value": 80, "--size":"9rem" }}>
        <div className="text-white font-semibold text-3xl">
        80%
        </div>
      </div>
      <div className="flex flex-col">
        <Badge className="text-base rounded-b-none" variant={"outline"}>
            GradeAI Feedback
        </Badge>
       <Feedback/>
       </div>
    </div>
  );
}
