import React from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import back from "../../assets/Icons/arrow_back-24px.svg";
import "./AddWarehouse.css";
import "../../index.css";
const URL = "http://localhost:8080/warehouse/";

export default class AddWarehouse extends React.Component {
  state = {};

  render() {
    return (
      <section className="Page-AddWarehouse">
        <section className="TitleBlock">
          <img src={back} alt={back}></img>
          <h1>Add New Warehouse</h1>
        </section>
        <form className="WarehouseData">
          <section>
            <h2>Warehouse Details</h2>
            <TextInput
              label="Warehouse Name"
              placeholder="Warehouse Name"
              name="name"
              error={false}
            />
            <TextInput
              label="Street Address"
              placeholder="Street Address"
              name="address"
              error={false}
            />
            <TextInput
              label="City"
              placeholder="City"
              name="city"
              error={false}
            />
            <TextInput
              label="Country"
              placeholder="Country"
              name="country"
              error={false}
            />
          </section>
          <section>
            <h2>Contact Details</h2>
            <TextInput
              label="Contact Name"
              placeholder="Contact Name"
              name="contact.name"
              error={false}
            />
            <TextInput
              label="Position"
              placeholder="Position"
              name="contact.position"
              error={false}
            />
            <TextInput
              label="Phone Number"
              placeholder="Phone Number"
              name="addrcityess"
              error={false}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              name="contact.email"
              error={false}
            />
          </section>
          <div className="ButtonFlex">
            <Button color="white" text="Cancel" />
            <Button color="blue" text="+ Add Warehouse" />
          </div>
        </form>
      </section>
    );
  }
}
