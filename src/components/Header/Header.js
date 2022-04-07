import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.scss";
import '../../styles/partials/breakpoints.scss'
import "../../index.css";
import "./Header.css";
import logo from "../../assets/Images/InStock-Logo_1x.png";

export default function Header() {
  return (
    <section className="headerSection2">
      <div className="topClump2">
        <img className="logoImage" src={logo} alt="logo" />
        <div className="directoryContainer2">
          <Link to ='/'><h3 className="directoryLink2 warehouses">Warehouses</h3></Link>
          <Link to="/inventory"><h3 className="directoryLink2 inventory">Inventory</h3></Link>
        </div>
      </div>
    </section>
  );
}
