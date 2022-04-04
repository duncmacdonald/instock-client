import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import Status from "../Status/Status";
import "./TableRowInventory.css";
import "../../index.css";

export default function TableRowInventory({ inventory, inventorySelector }) {
  return (
    <>
      <div className="TableRow-Mobile">
        <div>
          <h4>Inventory Item</h4>
          <ArrowLink text={inventory.itemName} action={() => console.log("hi")} />
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
          onClick={() => inventorySelector(inventory, true)}
          alt="delete"
          className="TableRow__button"
        ></img>

        <img src={pencil} alt="edit" className="TableRow__button"></img>
      </div>

      <div className="TableRow-Tablet wide">
        <ArrowLink
          text={inventory.itemName}
          action={() => console.log(`Link to ${inventory.id}`)}
        />
        <span>
          {inventory.category}
        </span>
        
        <Status state={inventory.status} />
        
        <span>{inventory.quantity}</span>
        <span>
          {inventory.warehouseName}
        </span>
        <div className="narrow">
          <img
            src={trash}
            alt="delete"
            className="TableRow__button"
            onClick={() => inventorySelector(inventory, true)}
          ></img>
          <img
            src={pencil}
            alt="edit"
            className="TableRow__button"
            onClick={() => console.log(`Edit ${inventory.id}`)}
          ></img>
        </div>
      </div>
    </>
  );
}
