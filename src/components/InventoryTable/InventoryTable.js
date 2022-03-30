import TableTitles from "../TableTitles/TableTitles";
import TableRowInventory from "../TableRowInventory/TableRowInventory";
import { Link } from "react-router-dom";
import "./InventoryTable.css";
import "../../index.css";

export default function InventoryTable({
  titles,
  contentArray,
  warehouseSelector,
  modalClicker,
}) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    return (
      <Link to={row.id}>
        <TableRowInventory
          key={row.id}
          warehouseSelector={warehouseSelector}
          warehouse={row}
        />
      </Link>
    );
  });

  return (
    <>
      <TableTitles titles={titles} />
      {rowsJSX}
    </>
  );
}
