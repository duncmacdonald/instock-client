import { Link } from "react-router-dom";
import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import Status from "../Status/Status";
// import "../TableRowInventory/TableRowInventory.css";
// import "../../index.css";
import "./warehouseInventory.css"

export default function WarehouseInventory({ inventory, itemSelector }) {
  return (
    <>
      <div className="TableRow-Mobile">
        <div>
          <h4>Inventory Item</h4>
          <Link to={"/inventory/" + inventory.id}>
            <ArrowLink
              text={inventory.itemName}
              action={() => console.log("hi")}
            />
          </Link>
        </div>

        <div>
          <h4>Status</h4>
          <Status state={inventory.status}/>
        </div>

        <div>
          <h4>Category</h4>
          <span>{inventory.category}</span>
        </div>

        <div>
          <div className="TableRow-Mobile__stacked">
            <div>
              <h4>QTY</h4>
              <span>{inventory.quantity}</span>
            </div>
            <div>
              <h4>Warehouse</h4>
              <span>{inventory.warehouseName}</span>
            </div>
          </div>
        </div>

        <img
          src={trash}
          onClick={() => itemSelector(inventory, true)}
          alt="delete"
          className="TableRow__button"
        ></img>

        <img src={pencil} alt="edit" className="TableRow__button"></img>
      </div>

      <div className="TableRow-Tablet wide">
        <Link to={"/inventory/" + inventory.id}>
          <ArrowLink
            text={inventory.itemName}
            action={() => console.log(`Link to ${inventory.id}`)}
          />
        </Link>
        <div className="category">
        <span>{inventory.category}</span></div>

        <Status state={inventory.status} />

        <div className="inventory">
        <span>{inventory.quantity}</span></div>

        <div className="narrow">
          <img
            src={trash}
            alt="delete"
            className="TableRow__button"
            onClick={() => itemSelector(inventory, true)}
          ></img>
          <Link to='/edit-inventory-item'>
          <img
            src={pencil}
            alt="edit"
            className="TableRow__button"
            onClick={() => console.log(`Edit ${inventory.id}`)}
          ></img></Link>
        </div>
      </div>
    </>
  );
}

