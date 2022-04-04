import TableTitles from "../TableTitles/TableTitles";
import TableRowInventory from "../TableRowInventory/TableRowInventory";
import "./InventoryTable.css";
import "../../index.css";

export default function InventoryTable({
  titles,
  contentArray,
  inventorySelector,
  modalClicker,
}) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    return (
      <TableRowInventory
        key={row.id}
        inventorySelector={inventorySelector}
        inventory={row}
      />
    );
  });

  return (
    <>
      <TableTitles titles={titles} />
      {rowsJSX}
    </>
  );
}
