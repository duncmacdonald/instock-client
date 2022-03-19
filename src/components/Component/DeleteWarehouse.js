import React, { Component } from "react";
import "../../styles/DeleteWarehouse.scss";

export class DeleteWarehouse extends Component {
  render() {
    return (
      <div className="delete-warehouse">
        <p className="delete-warehouse__close-button-top">X</p>
        <h1 className="delete-warehouse__heading">
          Delete Washington warehouse
        </h1>
        <p className="delete-warehouse__confirmation-message">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>

        <div className="delete-warehouse__button-container">
          <button className="delete-warehouse__cancel-button">Cancel</button>
          <button className="delete-warehouse__delete-button">Delete</button>
        </div>
      </div>
    );
  }
}

export default DeleteWarehouse;
