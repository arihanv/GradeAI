import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { useAtom } from "jotai";
import { rubricAtom } from "@/app/sharedState";

type Props = {
  rowCount: number;
  setRowCount(i: number): void;
  columnCount: number;
  setColumnCount(i: number): void;
};

const RubricCont: React.FC<Props> = ({
  rowCount,
  setRowCount,
  columnCount,
  setColumnCount,
}: Props) => {
  // const [rubric, setRubric] = useAtom(rubricAtom);
  // const [cellValues, setCellValues] = useState<string[][]>([[]]);

  // const increaseRows = () => {
  //   if (rowCount >= 10) {
  //     return;
  //   }

  //   setRowCount(rowCount + 1);
  //   setCellValues((prevCellValues) => [...prevCellValues, Array(columnCount).fill("")]);
  // };

  // const decreaseRows = () => {
  //   if (rowCount <= 1) {
  //     return;
  //   }

  //   setRowCount(rowCount - 1);
  //   setCellValues((prevCellValues) => prevCellValues.slice(0, -1));
  // };

  // const increaseColumns = () => {
  //   if (columnCount >= 10) {
  //     return;
  //   }

  //   setColumnCount(columnCount + 1);
  //   setCellValues((prevCellValues) =>
  //     prevCellValues.map((row) => [...row, ""])
  //   );
  // };

  // const decreaseColumns = () => {
  //   if (columnCount <= 1) {
  //     return;
  //   }

  //   setColumnCount(columnCount - 1);
  //   setCellValues((prevCellValues) =>
  //     prevCellValues.map((row) => row.slice(0, -1))
  //   );
  // };

  // const handleCellChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   rowIndex: number,
  //   columnIndex: number
  // ) => {
  //   const value = e.target.value;
  //   setCellValues((prevCellValues) => {
  //     const newCellValues = [...prevCellValues];
  //     newCellValues[rowIndex][columnIndex] = value;
  //     return newCellValues;
  //   });
  //   console.log(cellValues); // Add this line to log the updated cell values
  // };

  // const column = Array.from({ length: columnCount }, (_, i) => (
  //   <td key={i}>
  //     <input
  //       type="text"
  //       placeholder="Explanation for grade"
  //       value={cellValues[0][i]}
  //       onChange={(e) => handleCellChange(e, 0, i)}
  //     />
  //   </td>
  // ));

  // const rows = (
  //   <tbody>
  //     <tr>
  //       <th>Grades/Criteria</th>
  //       {Array.from({ length: columnCount }, (_, i) => (
  //         <th key={i}>Level {i + 1}</th>
  //       ))}
  //     </tr>
  //     {Array.from({ length: rowCount }, (_, i) => (
  //       <tr key={i}>
  //         <td>
  //           <input
  //             type="text"
  //             placeholder="Criteria"
  //             value={cellValues[i][0]}
  //             onChange={(e) => handleCellChange(e, i, 0)}
  //           />
  //         </td>
  //         {column}
  //       </tr>
  //     ))}
  //   </tbody>
  // );

  // const updateRubric = () => {
  //   let rows = &apos;&apos;;

  //   for (const tableRow of Array.from(document.querySelectorAll("tr"))) {
  //     const cells = Array.from(tableRow.querySelectorAll("td, th"));
  //     const rowContent = cells.map((cell: any) => cell.innerText.trim()).join(" | ");

  //     rows += `| ${rowContent} |\n`
  //   }

  //   setRubric(rows);
  // };

  return (
    <div className="rubric-popup">
      <div className="text-lg">
        <b>Rubric</b>
      </div>
      <hr />
      <div>
        {/* <h1>Rows</h1>
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
        </button> */}
      </div>
      <table className="rubric">
        <thead>
          <tr>
            <th>Traits</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Focus &amp; Details</td>
            <td>
              There is one clear, well-focused topic. Main ideas are clear and
              are well supported by detailed and accurate information.
            </td>
            <td>
              There is one clear, well-focused topic. Main ideas are clear but
              are not well supported by detailed information.
            </td>
            <td>There is one topic. Main ideas are somewhat clear.</td>
            <td>The topic and main ideas are not clear.</td>
          </tr>
          <tr>
            <td>Organization</td>
            <td>
              The introduction is inviting, states the main topic, and provides
              an overview of the paper. Information is relevant and presented in
              a logical order. The conclusion is strong.
            </td>
            <td>
              The introduction states the main topic and provides an overview of
              the paper. A conclusion is included.
            </td>
            <td>
              The introduction states the main topic. A conclusion is included.
            </td>
            <td>There is no clear introduction, structure, or conclusion.</td>
          </tr>
          <tr>
            <td>Voice</td>
            <td>
              The author&apos;s purpose of writing is very clear, and there is
              strong evidence of attention to the audience. The author&apos;s
              extensive knowledge and/or experience with the topic is/are
              evident.
            </td>
            <td>
              The author&apos;s purpose of writing is somewhat clear, and there
              is some evidence of attention to the audience. The author&apos;s
              knowledge and/or experience with the topic is/are evident.
            </td>
            <td>
              The author&apos;s purpose of writing is somewhat clear, and there
              is evidence of attention to the audience. The author&apos;s
              knowledge and/or experience with the topic is/are limited.
            </td>
            <td>The author&apos;s purpose of writing is unclear.</td>
          </tr>
          <tr>
            <td>Word Choice</td>
            <td>
              The author uses vivid words and phrases. The choice and placement
              of words seem accurate, natural, and not forced.
            </td>
            <td>
              The author uses vivid words and phrases. The choice and placement
              of words are inaccurate at times and/or seem overdone.
            </td>
            <td>
              The author uses words that communicate clearly, but the writing
              lacks variety.
            </td>
            <td>
              The writer uses a limited vocabulary. Jargon or clichés may be
              present and detract from the meaning.
            </td>
          </tr>
          <tr>
            <td>Sentence Structure, Grammar, Mechanics, &amp; Spelling</td>
            <td>
              All sentences are well constructed and have varied structure and
              length. The author makes no errors in grammar, mechanics, and/or
              spelling.
            </td>
            <td>
              Most sentences are well constructed and have varied structure and
              length. The author makes a few errors in grammar, mechanics,
              and/or spelling, but they do not interfere with understanding.
            </td>
            <td>
              Most sentences are well constructed, but they have a similar
              structure and/or length. The author makes several errors in
              grammar, mechanics, and/or spelling that interfere with
              understanding.
            </td>
            <td>
              Sentences sound awkward, are distractingly repetitive, or are
              difficult to understand. The author makes numerous errors in
              grammar, mechanics, and/or spelling that interfere with
              understanding.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RubricCont;
