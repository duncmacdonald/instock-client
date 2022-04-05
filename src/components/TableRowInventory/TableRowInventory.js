import { Link } from "react-router-dom";
import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import Status from "../Status/Status";
import "./TableRowInventory.css";
import "../../index.css";

export default function TableRowInventory({ warehouse, itemSelector }) {
  return (
    <>
      <div className="TableRow-Mobile">
        <div>
          <h4>Inventory Item</h4>
          <Link to={"/inventory/" + warehouse.id}>
            <ArrowLink
              text={warehouse.itemName}
              action={() => console.log("hi")}
            />
          </Link>
        </div>

        <div>
          <h4>Status</h4>
          <Status state={warehouse.status} />
        </div>

        <div>
          <h4>Category</h4>
          <span>{warehouse.category}</span>
        </div>

        <div>
          <div className="TableRow-Mobile__stacked">
            <div>
              <h4>QTY</h4>
              <span>{warehouse.quantity}</span>
            </div>
            <div>
              <h4>Warehouse</h4>
              <span>{warehouse.warehouseName}</span>
            </div>
          </div>
        </div>

        <img
          src={trash}
          onClick={() => itemSelector(warehouse, true)}
          alt="delete"
          className="TableRow__button"
        ></img>

        <img src={pencil} alt="edit" className="TableRow__button"></img>
      </div>

      <div className="TableRow-Tablet wide">
        <Link to={"/inventory/" + warehouse.id}>
          <ArrowLink
            text={warehouse.itemName}
            action={() => console.log(`Link to ${warehouse.id}`)}
          />
        </Link>
        <span>{warehouse.category}</span>

        <Status state={warehouse.status} />

        <span>{warehouse.quantity}</span>
        <span>{warehouse.warehouseName}</span>
        <div className="narrow">
          <img
            src={trash}
            alt="delete"
            className="TableRow__button"
            onClick={() => itemSelector(warehouse, true)}
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
