import React, { Component } from 'react'

export default class EditInventory extends Component {
    render() {
       
    return (
        <section className='addNewInventory'>
        <div className='titleBlock'>
        <Link to='/'><img src={backArrow} alt='arrow' className='backArrow'/></Link>
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
            <TextInput 
              placeholder="Description of item"
              name="description"
              value={this.state.form.description}
              listener={this.formListener}
              error={this.state.errors.description} className='itemDetailstextarea'
            />
        {/* Category Selection */}
           <label>Category</label> 
          <select name ='category' className='categorySelection' onChange={(event)=>{this.setState({form: {category: event.target.value}})}}>
           {this.state.category.map((category)=> {
             return <option value={category}>{category}</option>
           })}
          </select>
            </form>
            <form className='availabilityForm'>
            <h3>Item Availability</h3>
            <label>Status</label>
            <span>
            <input type='radio' className='radioButton' value='In Stock' onChange={(event)=>this.setState({form: {status: 'In Stock'}})}/>
            <label className='radio inStock'>In Stock</label>
            <input type='radio'  className='radioButton' value='Out of Stock' onChange={(event)=>this.setState({form: {status: 'Out of Stock'}})}/>
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
            {/* Warehouse Selection */}
            <label>Warehouse</label> 
            <select name ='warehouse' className='warehouseSelection' onChange={(event)=>{this.setState({form: {warehouse: event.target.value}})}}>
           {this.state.warehouse.map((warehouse)=> {
             return <option  value={warehouse}>{warehouse}</option>
           })}
          </select>
            <div className='buttonHolder'>
            
            <Link to='/'><Button color="white" text="Cancel" /></Link>
                <Button 
                 color='blue'
                 text='+ Add Inventory'
                 action={this.addInventory} 
                />
               
            </div>
            </form>
        </div>
        </section>
       
        </section>
    )
    }
}
