import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";
import "../../index.css";
import logo from "../../assets/images/InStock-Logo.svg";
export default function Header() {
  return (
    <section className="headerSection">
      <div className="topClump">
        <img className="logoImg" src={logo} alt="logo" />
        <div className="directoryContainer">
          <Link to ='/'><h3 className="directoryLink warehouses">Warehouses</h3></Link>
          <Link to="/inventory"><h3 className="directoryLink inventory">Inventory</h3></Link>
        </div>
      </div>
    </section>
  );
}
