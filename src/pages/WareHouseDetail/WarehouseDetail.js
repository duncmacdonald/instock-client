import React, {Component} from "react";
import { Link } from "react-router-dom";
import Status from "../../components/Status/Status";
import backicon from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px-white.svg";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory"
import axios from "axios";
import '../WareHouseDetail/WarehouseDetail.css'
import TableHeader from "../../components/TableHeader/TableHeader";




const warehouse_URL = "http://localhost:8080/warehouse/";


export default class WareHouseDetail extends Component {
    state = {
        singleWarehouseDetail : [],
        singleWarehouseInventory : [],
        contacts :[],
    }

    
    getWarehouseInventory(){
        let warehouseID = this.props.match.params.id;
        fetch(`http://localhost:8080/inventory/warehousedetail/${warehouseID}`)
        .then(res => res.json())
        .then(warehouse => this.setState({
            singleWarehouseInventory : warehouse,
        }))
    }


    componentDidMount(){
        let warehouseID = this.props.match.params.id;
        fetch(`http://localhost:8080/warehouse/${warehouseID}`)
        .then(res => res.json())
        .then(warehouseData => this.setState({
            singleWarehouseDetail : warehouseData,
            contacts : warehouseData.contact
        }),this.getWarehouseInventory())
    }

    render(){
        if (this.state.data === "") {
            return <div>Loading....</div>;
          }
          return (
            <div className="warehouse-details-main">
              <div className="warehouse-details-main__header-main">
                <div className="warehouse-details-main__left-section">
                  <Link to="/">
                    <img
                      className="warehouse-details-main__back-icon"
                      src={backicon}
                    />
                  </Link>
                  <h1 className="warehouse-details-main__header-name">
                    {this.state.singleWarehouseDetail.name}
                  </h1>
                </div>
                <Link to="/">
                  <div className="warehouse-details-main__image-main">
                    <img className="warehouse-details-main__image" src={edit} />
                    <p2 className="warehouse-details-main__edit-tablet">Edit</p2>
                  </div>
                </Link>
              </div>
              <div className="warehouse-details-main__tablet-main">
                <div className="warehouse-details-main__tablet-left">
                  <div className="warehouse-details-main__item-description-main">
                    <h4 className="warehouse-details-main__item-description-heading">
                      WAREHOUSE ADDRESS:
                    </h4>
                    <p2 className="warehouse-details-main__item-description">
                      {this.state.singleWarehouseDetail.address},{this.state.singleWarehouseDetail.city},{this.state.singleWarehouseDetail.country}
                    </p2>
                  </div>
                  
                </div>
                <div className="warehouse-details-main__tablet-right">
                  <div className="warehouse-details-main__status-quantity-container">
                    <div className="warehouse-details-main__status-container">
                      <h4 className="warehouse-details-main__status-description-heading">
                        CONTACT NAME:
                      </h4>
                      <div className="warehouse-details-main__status-description">
                        <p>{this.state.contacts.name}</p>
                        <p>{this.state.contacts.position}</p>
                      </div>
                    </div>
                    <div className="warehouse-details-main__quantity-container">
                      <h4 className="warehouse-details-main__quantity-description-heading">
                        CONTACT INFORMATION:
                      </h4>
                      <div className="warehouse-details-main__quantity-description">
                        <p>{this.state.contacts.phone}</p>
                        <p>{this.state.contacts.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TableHeader />
              <WarehouseInventory inventoryData={this.state.singleWarehouseInventory}/>
            </div>
          );
        }
      }
        