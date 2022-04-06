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
    sort: "",
  };

  sortData = (sortBy) => {
    console.log(sortBy);
    let sortedArray = [];

    if (sortBy === this.state.sort) {
      sortedArray = this.state.data.reverse();
      this.setState({ sort: sortBy, data: sortedArray });
    } else {
      switch (sortBy) {
        case "Inventory Item":
          sortedArray = this.state.data.sort((a, b) => {
            return a.itemName.localeCompare(b.itemName);
          });
          break;

        case "Category":
          sortedArray = this.state.data.sort((a, b) => {
            return a.category.localeCompare(b.category);
          });
          break;

        case "Status":
          sortedArray = this.state.data.sort((a, b) => {
            return a.status.localeCompare(b.status);
          });
          break;

        case "QTY":
          sortedArray = this.state.data.sort((a, b) => {
            return a.quantity - b.quantity;
          });
          break;
        
          case "Warehouse":
            sortedArray = this.state.data.sort((a, b) => {
              return a.warehouseName.localeCompare(b.warehouseName);
            });
            break;
      }

      this.setState({ sort: sortBy, data: sortedArray });
    }
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
            sortListener={this.sortData}
          />
        </section>
        {/* {this.state.deleteModal ? (
          <DeleteInventory
            clicker={this.currentItemSelection}
            selectedItem={this.state.selectedItem}
            deleteCall={this.deleteCall}
          />
        ) : (
          ""
        )} */}
      </>
    );
  }
}
