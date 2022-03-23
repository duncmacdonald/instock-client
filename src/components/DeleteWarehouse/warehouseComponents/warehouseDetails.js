import React from "react";

export default function WareHouseDetails() {
  return (
    <section className="warehouseDetails">
      <h3>Warehouse Details</h3>
      <form className="whDetailsForm">
        <label>Warehouse Name</label>
        <input type="text" placeholder="Enter A Name" />
        <label>Street Address</label>
        <input type="text" placeholder="Enter an Address" />
        <label>City</label>
        <input type="text" placeholder="Enter a City" />
        <label>Country</label>
        <input type="text" placeholder="Enter a Country" />
      </form>
    </section>
  );
}
