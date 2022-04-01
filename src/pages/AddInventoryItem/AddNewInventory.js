import React, {Component} from "react"
import axios from 'axios'
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import {Link} from 'react-router-dom'
import './addNewInventory.scss'
import TextInput from '../../components/TextInput/TextInput'
const URL = "http://localhost:8080/warehouse/";

export default class AddNewInventory extends Component {
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
  addInventory = () => {
    if (this.formValidator()) {
      
        const newInventory = {
            id: this.state.form.id,
            warehouseId: this.state.form.warehouseId,
            warehouseName: this.state.form.warehouseName,
            description: this.state.form.description,
            itemName: this.state.form.itemName,
            category: this.state.form.category,
            status: this.state.form.status,
            quantity: this.state.form.quantity,
        } 

        console.log("axios submit then link to main page");


      axios.post(URL, newInventory)
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

    this.setState({ errors: errors });

    return rtrnValue;
  };
  //Quantity Check       
    render () {
     
    return (
        <section className='addNewInventory'>
        <div className='titleBlock'>
        <Link to='/'><img src={backArrow} className='backArrow'/></Link>
            <h1 className='invTitle'>Add New Inventory Item</h1>
        </div>
        <section className='formSection'>
        <div className='inventoryDetailsSection'>
            <form className='invDetailsForm'>
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
            <textarea 
              placeholder="Description of item"
              name="description"
              value={this.state.form.description}
              listener={this.formListener}
              error={this.state.errors.description}
            ></textarea>
        {/* Category Selection */}
           <label>Category</label> 
          <select label='Category' name ='category' className='categorySelection' placeholder='Please Select'>
            <option value={this.state.category}></option>
          </select>
            </form>
            <form className='availabilityForm'>
            <h3>Item Availability</h3>
            <label>Status</label>
            <span>
            <input type='radio' className='radioButton'/>
            <label className='radio inStock'>In Stock</label>
            <input type='radio'  className='radioButton'/>
            <label className='radio outOfStock'>Out of Stock</label>
            </span>
            <TextInput
              label="Quantity"
              placeholder="0"
              name="quantity"
              value={this.state.form.quantity}
              listener={this.formListener}
              error={this.state.errors.quantity}
            />
            <div className='buttonHolder'>
                <button className='cancelButton'>Cancel</button>
                <button className='addItemButton' action={this.addInventory}>+Add Item</button>
            </div>
            </form>
        </div>
        </section>
       
        </section>
    )
   }
}