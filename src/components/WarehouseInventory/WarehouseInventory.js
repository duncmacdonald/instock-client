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
          <h4>INVENTORY ITEM</h4>
          <Link to={"/inventory/" + inventory.id}>
            <ArrowLink
              text={inventory.itemName}
              action={() => console.log("hi")}
            />
          </Link>
        </div>

        <div>
          <h4>STATUS</h4>
          <Status state={inventory.status}/>
        </div>

        <div>
          <h4>CATEGORY</h4>
          <span>{inventory.category}</span>
        </div>

        <div>
          <div className="TableRow-Mobile__stacked">
            <div>
              <h4>QTY</h4>
              <span>{inventory.quantity}</span>
            </div>
            
          </div>
        </div>

        <img
          src={trash}
          onClick={() => itemSelector(inventory, true)}
          alt="delete"
          className="TableRow__button"
        ></img>
        <Link to='/edit-inventory-item'>
        <img src={pencil} alt="edit" className="TableRow__button"></img></Link>
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

