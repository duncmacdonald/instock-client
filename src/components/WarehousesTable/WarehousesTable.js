import TableTitles from "../TableTitles/TableTitles";
import TableRowWarehouse from "../TableRowWarehouse/TableRowWarehouse";
import "./WarehousesTable.css";
import "../../index.css";

export default function WarehousesTable({ titles, contentArray }) {
  //Rows
  const rowsJSX = contentArray.map((row) => {
    return <TableRowWarehouse warehouse={row} />;
  });

  return (
    <>
      <TableTitles titles={titles} />
      {rowsJSX}
    </>
  );
}
