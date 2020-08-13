import React from "react";
import SidebarRow from "./SidebarRow/SidebarRow";

import NextWeekIcon from "@material-ui/icons/NextWeek";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ProductIcon from "@material-ui/icons/AccountTree";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={ProductIcon} title="Our products" />
      <SidebarRow Icon={NextWeekIcon} title="Contact Us " />
      <SidebarRow Icon={MenuBookIcon} title="Safety guidelines " />
    </div>
  );
}

export default Sidebar;
