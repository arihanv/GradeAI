import { buttonVariants } from "@/components/ui/button";

type Props = {
  rowCount: number,
  setRowCount(i: number): void,

  columnCount: number,
  setColumnCount(i: number): void
}

export default function RubricCont({rowCount, setRowCount, columnCount, setColumnCount}: Props) {
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

  // Generate the table column HTML
  let column = Array.from({ length: columnCount }, () => `<td><input type="text" placeholder='Explanation for grade' /></td>`).join('');

  // Generate the table rows HTML
  let rows = `
    <tr>
      <th>Grades/Criteria</th>
      ${Array.from({ length: columnCount }, (_, i) => `<th>Level ${i + 1}</th>`).join('')}
    </tr>
    
    ${Array.from({ length: rowCount }, () => `
    <tr>
      <td>
        <input type="text" placeholder='Criteria' />
      </td>
      ${column}
    </tr>`).join('')}`;


  return (
    <div className="rubric-popup">
      <div className="text-lg"><b>Rubric</b></div>
      <hr></hr>
      <div>
        <h1>Rows</h1>
        <button onClick={increaseRows} className={buttonVariants()}>+</button>
        <button onClick={decreaseRows} className={buttonVariants()}>-</button>

        <h1>Columns</h1>
        <button onClick={increaseColumns} className={buttonVariants()}>+</button>
        <button onClick={decreaseColumns} className={buttonVariants()}>-</button>
      </div>
      <table className="rubric">
        {/* Render the table rows */}
        <tbody dangerouslySetInnerHTML={{ __html: rows }}></tbody>
      </table>
    </div>
  );
}