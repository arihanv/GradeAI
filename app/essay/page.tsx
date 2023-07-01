import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Submit from "./submit";
import { MouseEventHandler } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <Textarea className="min-h-[80vh] resize-none" autoFocus placeholder="Start writing here...">
        </Textarea>
        <Submit/>
      </div>
    </div>
  );
}

// type Popup = {
//   togglePopup: 
// }
