import TableTitles from "../TableTitles/TableTitles";
import TableRowWarehouse from "../TableRowWarehouse/TableRowWarehouse";
import "./WarehousesTable.css";
import "../../index.css";

export default function WarehousesTable({
  titles,
  contentArray,
  warehouseSelector,
  modalClicker,
}) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    console.log(contentArray)
    return (
      <TableRowWarehouse
        key={row.id}
        warehouseSelector={warehouseSelector}
        warehouse={row}
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
