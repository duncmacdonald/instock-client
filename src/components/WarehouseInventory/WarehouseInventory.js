import React from 'react'
import '../WarehouseInventory/warehouseInventory.css'
import ArrowLink from "../ArrowLink/ArrowLink";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import pencil from "../../assets/Icons/edit-24px.svg";
import Status from "../Status/Status";
// import "./TableRowWarehouse.css";
import "../../index.css";

export default function WarehouseInventory ({inventoryData, warehouseSelector}){
  return (
    <div className='warehouseInventory-Container'>
        {inventoryData.map(data => (
            <>
            <div className="TableRow-Mobile">
              <div>
                <h4>Inventory Item</h4>
                <ArrowLink text={data.itemName} action={() => console.log("hi")} />
              </div>
      
              <div>
                <h4>Status</h4>
                <Status state={data.status}/>
              </div>
      
              <div>
                <h4>Category</h4>
                <span>{data.category}</span>
              </div>
      
              <div>
                <div className="TableRow-Mobile__stacked">
                  <div>
                    <h4>QTY</h4>
                    <span>{data.quantity}</span>
                  </div>
                
                </div>
              </div>
      
              <img
                src={trash}
                // onClick={() => warehouseSelector(warehouse, true)}
                alt="delete"
                className="TableRow__button"
              ></img>
      
              <img src={pencil} alt="edit" className="TableRow__button"></img>
            </div>
      
            <div className="TableRow-Tablet wide">
              <ArrowLink
                text={data.itemName}
                action={() => console.log(`Link to ${data.id}`)}
              />
              <span>
                {data.category}
              </span>
              
              <Status state={data.status} />
              
              <span className='dataQuantity'>{data.quantity}</span>
              
              <div className="narrow">
                <img
                  src={trash}
                  alt="delete"
                  className="TableRow__button"
                  onClick={() => console.log(`Delete ${data.id}`)}
                //   onClick={() => warehouseSelector(warehouse, true)}
                ></img>
                <img
                  src={pencil}
                  alt="edit"
                  className="TableRow__button"
                  onClick={() => console.log(`Edit ${data.id}`)}
                ></img>
              </div>
            </div>
          </>
        
        ))}
    </div>
  )
}

