import React from "react";
import { Link, useHistory } from "react-router-dom";
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
    sort: "",
    search: "",
    dataBackup: [],
  };

  searchListener = (event) => {
    const temp = event.target.value.toLowerCase();
    let filteredData = [...this.state.dataBackup].filter((list) => {
      return (
        list.name.toLowerCase().includes(temp) ||
        list.address.toLowerCase().includes(temp) ||
        list.contact.name.toLowerCase().includes(temp) ||
        list.contact.phone.toLowerCase().includes(temp) ||
        list.contact.email.toLowerCase().includes(temp)
      );
    });

    window.history.pushState({},"",`?search=${event.target.value}&sort=${this.state.sort}`);

    this.sortData(this.state.sort, filteredData);
    this.setState({ search: temp });
  }

  sortData = (sortBy, data) => {
    const temp = data ? data : this.state.data;
    let sortedArray = temp;

    if (data === undefined && sortBy === this.state.sort) {
      sortedArray = temp.reverse();
    } else {
      switch (sortBy) {
        case "Warehouse":
          sortedArray = temp.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;

        case "Address":
          sortedArray = temp.sort((a, b) => {
            return a.address.localeCompare(b.address);
          });
          break;

        case "Contact Name":
          sortedArray = temp.sort((a, b) => {
            return a.contact.name.localeCompare(b.contact.name);
          });
          break;

        case "Contact Information":
          sortedArray = temp.sort((a, b) => {
            return a.contact.phone.localeCompare(b.contact.phone);
          });
          break;
      }

      this.setState({ sort: sortBy });
    }

    this.setState({ data: sortedArray });
    // history.push({
    //   pathname: '/',
    //   search: `?sort=warehouse`,
    // });
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
      this.setState({ data: result.data, dataBackup: result.data });
    });
  };

  componentDidMount() {
    // const { location } = this.props;
    // const query = new URLSearchParams(location.search);
    // console.log(query);

    this.updateTable();
  }

  render() {
    return (
      <>
        <section className="Page Warehouse">
          <section className="TitleBlock">
            <h1>Warehouses</h1>
            <Search value={this.state.search} listener={this.searchListener} />
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
            sortListener={this.sortData}
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
