import React from "react";
import "../../styles/App.css"
import "../../index.css";
import logo from "../../assets/Images/InStock-Logo.svg";
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
