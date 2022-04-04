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
  };
// const history = useHistory();
  

  sortData = (sortBy) => {
    let sortedArray = [];
    
    if(sortBy === this.state.sort){
      sortedArray = this.state.data.reverse();
    } else {

      switch(sortBy){
        case "Warehouse":
          sortedArray = this.state.data.sort((a, b) =>{
            return a.name.localeCompare(b.name);
          });
          break;
  
        case "Address":
          sortedArray = this.state.data.sort((a, b) =>{
            return a.address.localeCompare(b.address);
          });
          break;
  
        case "Contact Name":
          sortedArray = this.state.data.sort((a, b) =>{
            return a.contact.name.localeCompare(b.contact.name);
          });
          break;
  
        case "Contact Information":
          sortedArray = this.state.data.sort((a, b) =>{
            return a.contact.phone.localeCompare(b.contact.phone);
          });
          break;
      }

      this.setState({sort: sortBy});
    }
    
    

    this.setState({data: sortedArray});
    // history.push({
    //   pathname: '/',
    //   search: `?sort=warehouse`,
    // });
  }

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
            sortListener = {this.sortData}
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
