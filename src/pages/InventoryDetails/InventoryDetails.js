import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Status from "../../components/Status/Status";
import backicon from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px-white.svg";
import "../../pages/InventoryDetails/InventoryDetails.css";
const URL = "http://localhost:8080/inventory/";
export class InventoryDetails extends Component {
  state = {
    data: "",
  };

  getInventoryDetails = (id) => {
    axios.get(URL + id).then((response) => {
      this.setState({ data: response.data });
      console.log(this.state.data);
    });
  };

  componentDidMount() {
    this.getInventoryDetails(this.props.routerprops);
  }

  render() {
    if (this.state.data === "") {
      return <div>Loading....</div>;
    }
    return (
      <div className="inventory-details-main">
        <div className="inventory-details-main__header-main">
          <div className="inventory-details-main__left-section">
            <Link to="/inventory">
              <img
                className="inventory-details-main__back-icon"
                src={backicon}
              />
            </Link>
            <h1 className="inventory-details-main__header-name">
              {this.state.data.itemName}
            </h1>
          </div>
          <Link to="/inventory">
            <div className="inventory-details-main__image-main">
              <img className="inventory-details-main__image" src={edit} />
              <p className="inventory-details-main__edit-tablet">Edit</p>
            </div>
          </Link>
        </div>
        <div className="inventory-details-main__tablet-main">
          <div className="inventory-details-main__tablet-left">
            <div className="inventory-details-main__item-description-main">
              <h4 className="inventory-details-main__item-description-heading">
                ITEM DESCRIPTION:
              </h4>
              <p className="inventory-details-main__item-description">
                {this.state.data.description}
              </p>
            </div>
            <div className="inventory-details-main__category-main">
              <h4 className="inventory-details-main__category-description-heading">
                CATEGORY:
              </h4>
              <p className="inventory-details-main__category-description">
                {this.state.data.category}
              </p>
            </div>
          </div>
          <div className="inventory-details-main__tablet-right">
            <div className="inventory-details-main__status-quantity-container">
              <div className="inventory-details-main__status-container">
                <h4 className="inventory-details-main__status-description-heading">
                  STATUS:
                </h4>
                <div className="inventory-details-main__status-description">
                  <Status state={this.state.data.status} />
                </div>
              </div>
              <div className="inventory-details-main__quantity-container">
                <h4 className="inventory-details-main__quantity-description-heading">
                  QUANTITY:
                </h4>
                <p className="inventory-details-main__quantity-description">
                  {this.state.data.quantity}
                </p>
              </div>
            </div>
            <div className="inventory-details-main__warehouse-info-container">
              <h4 className="inventory-details-main__warehouse-description-heading">
                WAREHOUSE:
              </h4>
              <p className="inventory-details-main__warehouse-description">
                {this.state.data.warehouseName}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryDetails;
