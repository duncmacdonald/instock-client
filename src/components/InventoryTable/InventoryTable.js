import TableTitles from "../TableTitles/TableTitles";
import TableRowInventory from "../TableRowInventory/TableRowInventory";

import "./InventoryTable.css";
import "../../index.css";

export default function InventoryTable({ titles, contentArray, itemSelector, sortListener }) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    return (
      <TableRowInventory
        key={row.id}
        itemSelector={itemSelector}
        warehouse={row}
      />
    );
  });

  return (
    <>
      <TableTitles titles={titles} sortListener={sortListener} />
      {rowsJSX}
    </>
  );
}
