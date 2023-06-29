import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface LinkButtonsProps {
  children: React.ReactNode;
  cont: React.ReactNode;
}

export default function ToolButton({ children, cont }: LinkButtonsProps) {
  return (
    <Popover>
    <PopoverTrigger asChild>
    <button className="border-rauno text-rauno border p-1 rounded-lg hover:opacity-70 transition ease-in-out">
      {children}
    </button>
    </PopoverTrigger>
    <PopoverContent className="w-90" side="right" >
      {cont}
    </PopoverContent>
    </Popover>
  );
}
