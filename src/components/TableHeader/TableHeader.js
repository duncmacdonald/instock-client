import TableTitles from "../TableTitles/TableTitles";
import TableRowInventory from "../TableRowInventory/TableRowInventory";
import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";
import "../InventoryTable/InventoryTable.css";
import "../../index.css";



export default function InventoryTable({ titles, contentArray, itemSelector, sortListener }) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    return (
      <WarehouseInventory
        key={row.id}
        itemSelector={itemSelector}
        inventory={row}
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