import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import Search from "../../components/Search/Search";
import "./Inventory.css";
import "../../index.css";
import DeleteInventory from "../../components/WarehouseComponentsMain/warehouseComponents/DeleteInventory";
const URL = "http://localhost:8080/inventory/";

export default class Inventory extends React.Component {
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
      console.log(result);
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
            <h1>Inventory</h1>
            <Search />
            <Link to="/AddItem">
              <Button color="blue" text="+ Add New Item" />
            </Link>
          </section>

          <InventoryTable
            titles={[
              "Inventory Item",
              "Category",
              "Status",
              "QTY",
              "Warehouse",
              "Actions",
            ]}
            contentArray={this.state.data}
            warehouseSelector={this.currentWarehouseSelection}
          />
        </section>
        {this.state.deleteModal ? (
          <DeleteInventory
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
