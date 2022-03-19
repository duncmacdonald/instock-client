import React from "react";
export default function Header() {
  return (
    <section className="headerSection">
      <img
        className="logoImg"
        src="instock-client/src/assets/images/InStock-Logo.svg"
        alt="logo"
      />
      <div className="directoryContainer">
        <h3>Warehouses</h3>
        <h3>Inventory</h3>
      </div>
    </section>
  );
}
