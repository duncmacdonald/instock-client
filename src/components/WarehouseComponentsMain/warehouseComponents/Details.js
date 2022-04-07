import WareHouseDetails from "./warehouseDetails";
import ContactDetails from "./ContactDetails";
import { Component } from "react";

export default class Details extends Component {
  render() {
    //console.log(this.props.match.params.id);
    return (
      <section className="details">
        <WareHouseDetails />
        <hr />
        <ContactDetails />
      </section>
    );
  }
}
