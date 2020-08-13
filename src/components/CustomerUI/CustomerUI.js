import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Cites from "../Cites/Cites";
import "./CustomerUI.css";
const CustomerUI = () => {
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebar />
        <Cites />
      </div>
    </div>
  );
};

export default CustomerUI;
