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
    return (
      <TableRowWarehouse
        warehouseSelector={warehouseSelector}
        warehouse={row}
        modalClicker={modalClicker}
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
