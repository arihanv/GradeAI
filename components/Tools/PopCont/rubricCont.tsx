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
  let column = Array.from({ length: columnCount }, () => `<td><input type="text" placeholder='Explanation for grade' /></td>`).join('');

  // Generate the table rows HTML
  let rows = `
    <tr>
      <th>Grades/Criteria</th>
      ${Array.from({ length: columnCount }, (_, i) => `<th>Level ${i + 1}</th>`).join('')}
    </tr>
    
    ${Array.from({ length: columnCount }, () => `
    <tr>
      <td>
        <input type="text" placeholder='Criteria' />
      </td>
      ${column}
    </tr>`).join('')}`;


  return (
    <div className="rubric-popup">
      <div>Rubric</div>
      <div>
        <h1>Rows</h1>
        <button onClick={() => { setRowCount(Math.min(rowCount + 1, 10)) }}>+</button>
        <button onClick={() => { setRowCount(Math.min(rowCount - 1)) }}>-</button>
        <h1>Columns</h1>
        <button onClick={() => { setColumnCount(Math.min(columnCount + 1)) }}>+</button>
        <button onClick={() => { setColumnCount(Math.min(columnCount - 1)) }}>-</button>
      </div>
      <table className="rubric">
        {/* Render the table rows */}
        <tbody dangerouslySetInnerHTML={{ __html: rows }}></tbody>
      </table>
    </div>
  );
}