import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import InventoryTable from "../../components/InventoryTable/InventoryTable";
import Search from "../../components/Search/Search";
import "./Inventory.css";
import "../../index.css";
const URL = "http://localhost:8080/inventory/";

export default class Inventory extends React.Component {
  state = {
    data: [],
    deleteModal: false,
    selectedItem: "",
  };

  modalClicker = () => {
    this.setState({ deleteModal: false });
  };

  currentItemSelection = (item, value) => {
    this.setState({
      deleteModal: value,
      selectedItem: item,
    });
  };

  deleteCall = (itemID) => {
    axios
      .delete(URL + itemID)
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
        <section className="Page Inventory">
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
            itemSelector={this.currentItemSelection}
          />
        </section>
        {this.state.deleteModal ? (
          <DeleteInventory
            clicker={this.currentItemSelection}
            selectedItem={this.state.selectedItem}
            deleteCall={this.deleteCall}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
