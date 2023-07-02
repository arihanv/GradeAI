import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  rowCount: number;
  setRowCount(i: number): void;
  columnCount: number;
  setColumnCount(i: number): void;
};

export default function RubricCont({
  rowCount,
  setRowCount,
  columnCount,
  setColumnCount,
}: Props) {
  const updateRubric = () => {
    let rows = [];

    for (const tableRow of Array.from(document.querySelectorAll("tr"))) {
      const cells = Array.from(tableRow.querySelectorAll("td, th"));
      const rowContent = cells.map((cell: any) => cell.innerText.trim());

      rows.push(rowContent);
    }

    setRubric(rows);
  };

  const increaseRows = () => {
    // Max 10 rows
    if (rowCount >= 10) {
      return;
    }

    setRowCount(rowCount + 1);
  };

  const decreaseRows = () => {
    // Min 1 row
    if (rowCount <= 1) {
      return;
    }

    setRowCount(rowCount - 1);
  };

  const increaseColumns = () => {
    // Max 10 columns
    if (columnCount >= 10) {
      return;
    }

    setColumnCount(columnCount + 1);
  };

  const decreaseColumns = () => {
    // Min 1 column
    if (columnCount <= 1) {
      return;
    }

    setColumnCount(columnCount - 1);
  };

  // Generate the table columns
  const column = Array.from({ length: columnCount }, (_, i) => (
    <td key={i}>
      <input type="text" placeholder="Explanation for grade" />
    </td>
  ));

  // Generate the table rows
  const rows = (
    <tbody>
      <tr>
        <th>Grades/Criteria</th>
        {Array.from({ length: columnCount }, (_, i) => (
          <th key={i}>Level {i + 1}</th>
        ))}
      </tr>
      {Array.from({ length: rowCount }, (_, i) => (
        <tr key={i}>
          <td>
            <input type="text" placeholder="Criteria" />
          </td>
          {column}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="rubric-popup">
      <div className="text-lg">
        <b>Rubric</b>
      </div>
      <hr></hr>
      <div>
        <h1>Rows</h1>
        <button onClick={increaseRows} className={buttonVariants()}>
          +
        </button>
        <button onClick={decreaseRows} className={buttonVariants()}>
          -
        </button>

        <h1>Columns</h1>
        <button onClick={increaseColumns} className={buttonVariants()}>
          +
        </button>
        <button onClick={decreaseColumns} className={buttonVariants()}>
          -
        </button>
      </div>
      <table className="rubric">{rows}</table>
    </div>
  );
}
