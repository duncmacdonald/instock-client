import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import "./TableRowWarehouse.css";
import "../../index.css";

export default function TableRowWarehouse({ warehouse, warehouseSelector }) {
  return (
    <>
      <div className="TableRow-Mobile">
        <div>
          <h4>Warehouse</h4>
          <ArrowLink text={warehouse.name} action={() => console.log("hi")} />
        </div>

        <div>
          <h4>Contact Name</h4>
          <span>{warehouse.contact.name}</span>
        </div>

        <div>
          <h4>Address</h4>
          <span>
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </span>
        </div>

        <div>
          <h4>Contact Information</h4>
          <div className="TableRow-Mobile__stacked">
            <span>{warehouse.contact.phone}</span>
            <span>{warehouse.contact.email}</span>
          </div>
        </div>

        <img
          src={trash}
          onClick={() => warehouseSelector(warehouse)}
          alt="delete"
          className="TableRow__button"
        ></img>

        <img src={pencil} alt="edit" className="TableRow__button"></img>
      </div>

      <div className="TableRow-Tablet">
        <ArrowLink
          text={warehouse.name}
          action={() => console.log(`Link to ${warehouse.id}`)}
        />
        <span>
          {warehouse.address}, {warehouse.city}, {warehouse.country}
        </span>
        <span className="wide">{warehouse.contact.name}</span>
        <div className="TableRow-Tablet__stacked wide">
          <span>{warehouse.contact.phone}</span>
          <span>{warehouse.contact.email}</span>
        </div>
        <div className="narrow">
          <img
            src={trash}
            alt="delete"
            className="TableRow__button"
            onClick={() => warehouseSelector(warehouse)}
          ></img>
          <img
            src={pencil}
            alt="edit"
            className="TableRow__button"
            onClick={() => console.log(`Edit ${warehouse.id}`)}
          ></img>
        </div>
      </div>
    </>
  );
}
