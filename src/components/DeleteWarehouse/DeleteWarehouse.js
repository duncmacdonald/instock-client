import React, { Component } from "react";
import "./DeleteWarehouse.css";
import "../../index.css";

export class DeleteWarehouse extends Component {
  render() {
    return (
      <div className="delete-warehouse-tablet">
        <div className="delete-warehouse">
          <div className="delete-warehouse__top-section">
            <p className="delete-warehouse__close-button-top">X</p>
            <h1 className="delete-warehouse__heading">
              Delete '$Warehousename' warehouse?
            </h1>
            <p className="delete-warehouse__confirmation-message">
              Please confirm that you’d like to delete the '$Warehousename' from
              the list of warehouses. You won’t be able to undo this action.
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

export default DeleteWarehouse;
