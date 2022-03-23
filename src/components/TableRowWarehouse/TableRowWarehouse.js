import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import "./TableRowWarehouse.css";
import "../../index.css";

export default function TableRowWarehouse({
  warehouse,
  warehouseSelector,
  modalClicker,
}) {
  return (
    <div className="TableRow">
      <ArrowLink text={warehouse.name} action={() => console.log("hi")} />
      <span>
        {warehouse.address}, {warehouse.city}, {warehouse.country}
      </span>
      <span>{warehouse.contact.name}</span>
      <div className="TableRow__stacked">
        <span>{warehouse.contact.phone}</span>
        <span>{warehouse.contact.email}</span>
      </div>
      <div>
        <img
          onClick={() => {
            warehouseSelector(warehouse);
            modalClicker(true);
          }}
          src={trash}
          alt="delete"
          className="TableRow__button"
        ></img>
        <img src={pencil} alt="edit" className="TableRow__button"></img>
      </div>
    </div>
  );
}
