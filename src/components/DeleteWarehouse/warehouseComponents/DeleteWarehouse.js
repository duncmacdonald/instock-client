import React, { Component } from "react";
import "../DeleteWarehouse.scss";

export class DeleteWarehouse extends Component {
  render() {
    return (
      <div className="delete-warehouse-tablet">
        <div className="delete-warehouse">
          <p
            onClick={() => this.props.clicker(null, false)}
            className="delete-warehouse__close-button-top"
          >
            X
          </p>
          <div className="delete-warehouse__mobile">
            <h1 className="delete-warehouse__heading">
              Delete {this.props.selectedWarehouse.name} warehouse
            </h1>
            <p className="delete-warehouse__confirmation-message">
              Please confirm that you’d like to delete the{" "}
              {this.props.selectedWarehouse.name} from the list of warehouses.
              You won’t be able to undo this action.
            </p>
          </div>

          <div className="delete-warehouse__button-container">
            <button
              onClick={() => this.props.clicker(null, false)}
              className="delete-warehouse__cancel-button"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                this.props.deleteCall(this.props.selectedWarehouse.id);
                this.props.clicker(null, false);
              }}
              className="delete-warehouse__delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteWarehouse;
