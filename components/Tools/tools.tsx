import React from "react";
import ToolButton from "./toolButton";
import { Bot, Edit, Table } from "lucide-react";
import BotCont from "./PopCont/botCont";
import EditCont from "./PopCont/editCont";
import RubricCont from "./PopCont/rubricCont";

type Props = {};

export default function Tools({}: Props) {
  return (
    <div>
      <div className="h-fit border-rauno border rounded-2xl p-1.5 flex md:flex-col gap-1.5 justify-center">
        <ToolButton cont={<BotCont/>}>
          <Bot size={20} />
        </ToolButton>
        <ToolButton cont={<EditCont/>}>
          <Edit size={20} />
        </ToolButton>
        <ToolButton cont={<RubricCont/>}>
          <Table size={20} />
        </ToolButton>
      </div>
    </div>
  );
}
