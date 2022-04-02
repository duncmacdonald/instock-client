import React, { Component } from "react";
import "../../WarehouseComponentsMain/DeleteWarehouse.scss";

export class DeleteInventory extends Component {
  render() {
    return (
      <div className="delete-warehouse-tablet">
        <div className="delete-warehouse">
          <div className="delete-warehouse__top-section">
            <p className="delete-warehouse__close-button-top">X</p>
            <h1 className="delete-warehouse__heading">
              Delete '$inventory' inventory item?
            </h1>
            <p className="delete-warehouse__confirmation-message">
              Please confirm that you’d like to delete '$inventory' from the
              inventory list. You won’t be able to undo this action.
            </p>
          </div>

          <div className="delete-warehouse__button-container">
            <button className="delete-warehouse__cancel-button">Cancel</button>
            <button className="delete-warehouse__delete-button">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteInventory;
