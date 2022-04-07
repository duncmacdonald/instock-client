import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, Redirect } from "react-router-dom";
import "./addNewInventory.scss";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
const URL = "http://localhost:8080/inventory/";
const wareHouseURL = "http://localhost:8080/warehouse/";

export default class AddNewInventory extends Component {
  state = {
    category: [],
    warehouse: [],
    warehouseList: [],
    status: "",
    redirect: false,
    form: {
      warehouseName: "",
      itemName: "",
      description: "",
      category: "",
      status: "",
      quantity: "",
    },
    errors: {
      id: false,
      warehouseID: false,
      warehouseName: false,
      itemName: false,
      description: false,
      category: false,
      status: false,
      quantity: false,
    },
  };
  //Axios Request to Get Data for Selections
  componentDidMount() {
    let categoriesArr = [];
    let warehouseArr = [];
    axios.get(URL).then((result) => {
      categoriesArr = result.data.map((inv) => {
        return inv.category;
      });

      warehouseArr = result.data.map((inv) => {
        return inv.warehouseName;
      });
      const nonDuplicatedCategories = categoriesArr.filter(
        (categoryName, index) => categoriesArr.indexOf(categoryName) === index
      );
      this.setState({ category: nonDuplicatedCategories });
      const singleWarehouses = warehouseArr.filter(
        (warehouseName, index) => warehouseArr.indexOf(warehouseName) === index
      );
      this.setState({ warehouse: singleWarehouses });
    });

    axios.get(wareHouseURL).then((warehouse) => {
      this.setState({ warehouseList: warehouse.data });
    });
  }
  formListener = (event) => {
    const key = event.target.name;
    this.setState({ form: { ...this.state.form, [key]: event.target.value } });
  };
  //This is the function which adds all of the input data to a new inventory.
  addInventory = () => {
    let newInventory = {
      id: v4(),
      warehouseID: null,
      warehouseName: this.state.form.warehouseName,
      description: this.state.form.description,
      itemName: this.state.form.itemName,
      category: this.state.form.category,
      status: this.state.form.status,
      quantity: Number(this.state.form.quantity),
    };
    if (this.formValidator()) {
      const warehouseTempID = this.state.warehouseList.filter((warehouse) => {
        if (warehouse.name === this.state.form.warehouseName) {
          return warehouse.id;
        }
      });

      newInventory.warehouseID = warehouseTempID[0].id;

      console.log(newInventory);

      //Axios Post Request
      axios
        .post(URL, newInventory)
        .then((response) => {
          console.log(newInventory);
          this.setState({ redirect: true });
          newInventory = {};
          return response;
        })
        .catch((response) => console.log(response));
    }
  };
  //This is a form validator which checks if the info is valid
  formValidator = () => {
    const keys = Object.keys(this.state.form);
    const data = Object.values(this.state.form);
    const errors = this.state.errors;
    let rtrnValue = true;

    //Check that some data exists
    // data.forEach((field, i) => {
    //   if (field.length < 3) {
    //     errors[keys[i]] = true;
    //     rtrnValue = false;
    //   } else {
    //     errors[keys[i]] = false;
    //   }
    // });

    this.setState({ errors: errors });

    return rtrnValue;
  };
  // //Radio Button Function
  // updateStateRadio(event) {
  //   this.setState({form: {
  //     status: event.target.value
  //   }});
  // }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/inventory" />;
    }

    return (
      <section className="addNewInventory">
        <div className="titleBlock">
          <Link to="/inventory">
            <img src={backArrow} alt="arrow" className="backArrow" />
          </Link>
          <h1 className="invTitle">Add New Inventory Item</h1>
        </div>
        <section className="formSection">
          <div className="inventoryDetailsSection">
            <form className="invDetailsForm">
              <h3>Item Details</h3>
              <TextInput
                label="Item Details"
                placeholder="Item Name"
                name="itemName"
                value={this.state.form.itemName}
                listener={this.formListener}
                error={this.state.errors.itemName}
              />
              <label>Description</label>
              <TextInput
                placeholder="Description of item"
                name="description"
                value={this.state.form.description}
                listener={this.formListener}
                error={this.state.errors.description}
                className="itemDetailstextarea"
              />
              {/* Category Selection */}
              <label>Category</label>
              <select
                name="category"
                value={this.state.form.category}
                className="categorySelection"
                onChange={(event) => {
                  console.log(event.target.value);
                  this.setState({
                    form: { ...this.state.form, category: event.target.value },
                  });
                }}
              >
                {this.state.category.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
              </select>
            </form>
            <form className="availabilityForm">
              <h3>Item Availability</h3>
              <label>Status</label>
              <span>
                <input
                  type="radio"
                  className="radioButton"
                  value="In Stock"
                  checked={this.state.form.status === "In Stock"}
                  onChange={(event) =>
                    this.setState({
                      form: { ...this.state.form, status: event.target.value },
                    })
                  }
                />
                <label className="radio inStock">In Stock</label>
                <input
                  type="radio"
                  className="radioButton"
                  value="Out of Stock"
                  checked={this.state.form.status === "Out of Stock"}
                  onChange={(event) =>
                    this.setState({
                      form: { ...this.state.form, status: event.target.value },
                    })
                  }
                />
                <label className="radio outOfStock">Out of Stock</label>
              </span>
              <TextInput
                label="Quantity"
                placeholder="0"
                name="quantity"
                value={this.state.form.quantity}
                listener={this.formListener}
                error={this.state.errors.quantity}
              />
              {/* Warehouse Selection */}
              <label>Warehouse</label>
              <select
                name="warehouse"
                className="warehouseSelection"
                onChange={(event) =>
                  this.setState({
                    form: {
                      ...this.state.form,
                      warehouseName: event.target.value,
                    },
                  })
                }
              >
                {this.state.warehouse.map((warehouse) => {
                  return <option value={warehouse}>{warehouse}</option>;
                })}
              </select>
              <div className="buttonHolder">
                <Link to="/">
                  <Button color="white" text="Cancel" />
                </Link>
                <Button
                  color="blue"
                  text="+ Add Inventory"
                  action={this.addInventory}
                />
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
