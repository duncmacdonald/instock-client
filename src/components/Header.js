import React from "react";
import logo from "../assets/images/InStock-Logo.svg";
export default function Header() {
  return (
    <section className="headerSection">
      <div className="topClump">
        <img className="logoImg" src={logo} alt="logo" />
        <div className="directoryContainer">
          <h3 className="directoryLink warehouses">Warehouses</h3>
          <h3 className="directoryLink inventory">Inventory</h3>
        </div>
      </div>
    </section>
  );
}
