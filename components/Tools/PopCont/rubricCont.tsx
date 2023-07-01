"use client";

import React, { useState } from 'react';


export default function RubricCont() {
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(4);

  const increaseRows = () => {
    setRowCount(rowCount + 1);
  };

  const increaseColumns = () => {

  };

  // Generate the table column HTML
  let column = "";
  for (let i = 0; i < columnCount; i++) {
    column += `<td><input type="text" placeholder='Explanation for grade' /></td>`;
  }

  // Generate the table rows HTML
  let rows = `
    <tr>
      <th>Grades/Criteria</th>
      ${Array.from({ length: columnCount }, (_, i) => `<th>Level ${i + 1}</th>`).join('')}
    </tr>`;

  for (let i = 0; i < rowCount; i++) {
    rows += `
      <tr>
        <td><input type="text" placeholder='Criteria' /></td>
        ${column}
      </tr>
    `;
  }

  return (
    <div className="rubric-popup">
      <div>Rubric</div>
      <div>
        <h1>Rows</h1>
        <button onClick={() => { setRowCount(rowCount + 1) }}>+</button>
        <button onClick={() => { setRowCount(rowCount - 1) }}>-</button>
        <h1>Columns</h1>
        <button onClick={() => { setColumnCount(columnCount + 1) }}>+</button>
        <button onClick={() => { setColumnCount(columnCount - 1) }}>-</button>
      </div>
      <table className="rubric">
        {/* Render the table rows */}
        <tbody dangerouslySetInnerHTML={{ __html: rows }}></tbody>
      </table>
    </div>
  );
}