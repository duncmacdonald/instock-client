import React from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import back from "../../assets/Icons/arrow_back-24px.svg";
import email from "email-validator";
import "./AddWarehouse.css";
import "../../index.css";
const URL = "http://localhost:8080/warehouse/";

export default class AddWarehouse extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    contactPosition: "",
    contactPhone: "",
    contactEmail: "",
    errors: {
      name: false,
      address: false,
      city: false,
      country: false,
      contactName: false,
      contactPosition: false,
      contactPhone:false,
      contactEmail:false,
    },
  };

  formListener = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addWarehouse = () => {
      if(this.formValidator()){
          console.log("axios submit then link to main page");
      }
  }


  formValidator = () => {
      const keys = Object.keys(this.state);
      const data = Object.values(this.state);
      const errors = data.pop();
      let rtrnValue = true;

      //Check that some data exists
      data.forEach((field,i) =>{
          if(field.length < 3){
              errors[keys[i]]=true;
              rtrnValue = false
          } else {
            errors[keys[i]]=false;
          }
      })

      if(!(email.validate(this.state.contactEmail))){
          errors.contactEmail = true;
          rtrnValue = false;
      }

      if(!(this.state.contactPhone.length === 17 && this.state.contactPhone.substring(0,4) === "+1 (" && this.state.contactPhone.substring(7,9) === ") " &&this.state.contactPhone.charAt(12) === "-")) {
        setTimeout(() => alert("Phone number format must be: +1 (###) ###-####"), 1);
          errors.contactPhone = true;
          rtrnValue = false;
      }

      this.setState({errors: errors});
      
      
      return rtrnValue;
  }


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
              value={this.state.name}
              listener={this.formListener}
              error={this.state.errors.name}
            />
            <TextInput
              label="Street Address"
              placeholder="Street Address"
              name="address"
              value={this.state.address}
              listener={this.formListener}
              error={this.state.errors.address}
            />
            <TextInput
              label="City"
              placeholder="City"
              name="city"
              value={this.state.city}
              listener={this.formListener}
              error={this.state.errors.city}
            />
            <TextInput
              label="Country"
              placeholder="Country"
              name="country"
              value={this.state.country}
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
              value={this.state.contactName}
              listener={this.formListener}
              error={this.state.errors.contactName}
            />
            <TextInput
              label="Position"
              placeholder="Position"
              name="contactPosition"
              value={this.state.contactPosition}
              listener={this.formListener}
              error={this.state.errors.contactPosition}
            />
            <TextInput
              label="Phone Number"
              placeholder="Phone Number"
              name="contactPhone"
              value={this.state.contactPhone}
              listener={this.formListener}
              error={this.state.errors.contactPhone}
            />
            <TextInput
              label="Email"
              placeholder="Email"
              name="contactEmail"
              value={this.state.contactEmail}
              listener={this.formListener}
              error={this.state.errors.contactEmail}
            />
          </section>
          <div className="ButtonFlex">
            <Button color="white" text="Cancel" />
            <Button color="blue" text="+ Add Warehouse" action={this.addWarehouse}/>
          </div>
        </form>
      </section>
    );
  }
}
