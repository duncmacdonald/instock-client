import WareHouseDetails from "./warehouseDetails";
import ContactDetails from "./ContactDetails";
import { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <section className="details">
        <WareHouseDetails />
        <ContactDetails />
        <div className="submissionSection">
          <button className="saveButton">Submit</button>
          <button className="cancelButton">Cancel</button>
        </div>
      </section>
    );
  }
}
