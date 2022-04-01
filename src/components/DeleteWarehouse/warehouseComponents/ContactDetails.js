import { Component } from "react";

export default class ContactDetails extends Component {
  render() {
    return (
      <form className="contactDetails">
        <h3>Contact Details</h3>
        <div className="cDForm">
          <label>Contact Name</label>
          <input type="text" placeholder="Enter a Name" />
          <label>Position</label>
          <input type="text" placeholder="Enter a Position" />
          <label>Phone Number</label>
          <input type="text" placeholder="+1 (555)555-5555" />
          <label>Email</label>
          <input type="email" placeholder="name@email.com" />
        </div>
      </form>
    );
  }
}
