import React, { Component } from "react";
import axios from "axios";
const URL = "http://localhost:8080/inventory/";
export class InventoryDetails extends Component {
  getInventoryDetails = (id) => {
    axios.get(URL + id).then((response) => {
      console.log(response.data);
    });
  };
  render() {
    this.getInventoryDetails(this.props.routerprops);

    return <div></div>;
  }
}

export default InventoryDetails;
