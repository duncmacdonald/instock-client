import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import WarehousesTable from "../../components/WarehousesTable/WarehousesTable";
import Search from "../../components/Search/Search";
import "./Warehouses.css";
import "../../index.css";
import DeleteWarehouse from "../../components/WarehouseComponentsMain/warehouseComponents/DeleteWarehouse";
const URL = "http://localhost:8080/warehouse/";

export default class Warehouses extends React.Component {
  state = {
    data: [],
    deleteModal: false,
    selectedWarehouse: "",
  };

  modalClicker = () => {
    this.setState({ deleteModal: false });
  };

  currentWarehouseSelection = (warehouse, value) => {
    this.setState({
      deleteModal: value,
      selectedWarehouse: warehouse,
    });
  };

  deleteCall = (warehouseID) => {
    axios
      .delete(URL + warehouseID)
      .then((success) => {
        this.updateTable();
      })
      .catch((error) => console.log(error));
  };

  updateTable = () => {
    axios.get(URL).then((result) => {
      this.setState({ data: result.data });
    });
  };

  componentDidMount() {
    this.updateTable();
  }

  render() {
    return (
      <>
        <section className="Page">
          <section className="TitleBlock">
            <h1>Warehouses</h1>
            <Search />
            <Link to="/AddWarehouse">
              <Button color="blue" text="+ Add New Warehouse" />
            </Link>
          </section>

          <WarehousesTable
            titles={[
              "Warehouse",
              "Address",
              "Contact Name",
              "Contact Information",
              "Actions",
            ]}
            contentArray={this.state.data}
            warehouseSelector={this.currentWarehouseSelection}
          />
        </section>
        {this.state.deleteModal ? (
          <DeleteWarehouse
            clicker={this.currentWarehouseSelection}
            selectedWarehouse={this.state.selectedWarehouse}
            deleteCall={this.deleteCall}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
