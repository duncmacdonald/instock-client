import React, {Component} from "react"
import backArrow from "../../assets/Icons/arrow_back-24px.svg"
import {Link} from 'react-router-dom'
import '/Users/noahlatner/Desktop/instock-client-main/instock-client/instock-client/src/components/AddInventoryItem/addNewInventory.scss'
export default class AddNewInventory extends Component {
    state = {
    
      }
        handleChange = (e)=> {
            e.preventDefault();
            const name = e.target.name;
            const description = e.target.description;
        }
        inventoryCategories =()=> { 
            return this.state.data[0].map()}
    
         
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
            <label>Item Name</label>
            <input type='text' name='name' placeholder='Item Name'/>
            <label>Description</label>
            <textarea name='description' placeholder='Please enter a brief description'></textarea>
            <label>Category</label>
            <select name='category' className='categorySelection'>
                <option value=''></option>
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
            <label>Quantity</label>
            <input type='text' name='quantity' placeholder='0'/>
            <label>Warehouse</label>
            <select name='category' className='categorySelection'>
                <option value=''></option>    
            </select>
            <div className='buttonHolder'>
                <button className='cancelButton'>Cancel</button>
                <button className='addItemButton'>+Add Item</button>
            </div>
            </form>
        </div>
        </section>
       
        </section>
    )
   }
}