import React from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import back from "../../assets/Icons/arrow_back-24px.svg";
import email from "email-validator";
import "./AddWarehouse.css";
import "../../index.css";
import { Link, Redirect } from "react-router-dom";
const URL = "http://localhost:8080/warehouse/";

export default class AddWarehouse extends React.Component {
  state = {
    redirect: false,
    form: {
        id: "",
        warehouseID: "",
        warehouseName: "",
        itemName: "",
        description: "",
        category: "",
        status: "",
        quantity: ""
    },
    errors: {
      id: false,
      warehouseID: false,
      warehouseName: false,
      itemName: false,
      description: false,
      category: false,
      status: false,
      quantity: false
    },
  };

  formListener = (event) => {
    const key = event.target.name;
    this.setState({ form: {...this.state.form, [key]: event.target.value} });
  };

  addWarehouse = () => {
    if (this.formValidator()) {
      
        const newWarehouse = {
            name: this.state.form.name,
            address: this.state.form.address,
            city: this.state.form.city,
            country: this.state.form.country,
            contact: {
                name: this.state.form.contactName,
                position: this.state.form.contactPosition,
                phone: this.state.form.contactPhone,
                email: this.state.form.contactEmail,
            }
        } 

        console.log("axios submit then link to main page");


      axios.post(URL, newWarehouse)
        .then(response => this.setState({redirect: true}));

    }
  };

  formValidator = () => {
    const keys = Object.keys(this.state.form);
    const data = Object.values(this.state.form);
    console.log(data);
    const errors = this.state.errors;
    let rtrnValue = true;

    //Check that some data exists
    data.forEach((field, i) => {
      if (field.length < 3) {
        errors[keys[i]] = true;
        rtrnValue = false;
      } else {
        errors[keys[i]] = false;
      }
    });

    //extra checks for email
    if (!email.validate(this.state.form.contactEmail)) {
      errors.contactEmail = true;
      rtrnValue = false;
    }

    //extra checks for phone
    if (
      !(
        this.state.form.contactPhone.length === 17 &&
        this.state.form.contactPhone.substring(0, 4) === "+1 (" &&
        this.state.form.contactPhone.substring(7, 9) === ") " &&
        this.state.form.contactPhone.charAt(12) === "-"
      )
    ) {
      setTimeout(
        () => alert("Phone number format must be: +1 (###) ###-####"),
        1
      );
      errors.contactPhone = true;
      rtrnValue = false;
    }

    this.setState({ errors: errors });

    return rtrnValue;
  };

  render() {
    if (this.state.redirect) {
        return <Redirect to='/' />;
      }

    return (
      <section className="Page-AddWarehouse">
        <section className="TitleBlock">
        <Link to='/'><img src={back} alt="back"></img></Link>
          <h1>Add New Warehouse</h1>
        </section>
        <form className="WarehouseData">
          <section>
            <h2>Warehouse Details</h2>
            <TextInput
              label="Warehouse Name"
              placeholder="Warehouse Name"
              name="name"
              value={this.state.form.name}
              listener={this.formListener}
              error={this.state.errors.name}
            />
            <TextInput
              label="Street Address"
              placeholder="Street Address"
              name="address"
              value={this.state.form.address}
              listener={this.formListener}
              error={this.state.errors.address}
            />
            <TextInput
              label="City"
              placeholder="City"
              name="city"
              value={this.state.form.city}
              listener={this.formListener}
              error={this.state.errors.city}
            />
            <TextInput
              label="Country"
              placeholder="Country"
              name="country"
              value={this.state.form.country}
              listener={this.formListener}
              error={this.state.errors.country}
            />
          </section>
          <section>
            <h2>Contact Details</h2>
            <TextInput
              label="Contact Name"
              placeholder="Contact Name"
              name="contactName"
              value={this.state.form.contactName}
              listener={this.formListener}
              error={this.state.errors.contactName}
            />
            <TextInput
              label="Position"
              placeholder="Position"
              name="contactPosition"
              value={this.state.form.contactPosition}
              listener={this.formListener}
              error={this.state.errors.contactPosition}
            />
            <TextInput
              label="Phone Number"
              placeholder="Phone Number"
              name="contactPhone"
              value={this.state.form.contactPhone}
              listener={this.formListener}
              error={this.state.errors.contactPhone}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              name="contactEmail"
              value={this.state.form.contactEmail}
              listener={this.formListener}
              error={this.state.errors.contactEmail}
            />
          </section>
          <div className="ButtonFlex">
            <Link to='/'><Button color="white" text="Cancel" /></Link>
            <Button
              color="blue"
              text="+ Add Warehouse"
              action={this.addWarehouse}
            />
          </div>
        </form>
      </section>
    );
  }
}
