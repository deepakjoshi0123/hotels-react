import React from "react";
import "../Header/Header.css";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import FlightIcon from "@material-ui/icons/Flight";
import HotelIcon from "@material-ui/icons/Hotel";
import BusIcon from "@material-ui/icons/DirectionsBus";
import TrainIcon from "@material-ui/icons/Train";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";

import HistoryIcon from "@material-ui/icons/History";

//es7 snippets

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header__logo"
          alt="logo "
          src="https://www.techtraveleat.com/wp-content/uploads/2016/08/goibibo-logo.jpg"
        />
      </div>
      <FlightIcon className="header_icon" />
      <HotelIcon className="header_icon" />
      <BusIcon className="header_icon" />
      <TrainIcon className="header_icon" />
      <LocalTaxiIcon className="header_icon" />
      <Link to={`/EditProfile`}>
        <EditIcon className="header_icon" label="More" />
      </Link>
      <Link to={`/History`}>
        <HistoryIcon className="header_icon" label="More" />
      </Link>
      <Avatar
        alt="profile pic"
        src="https://www.pngarts.comiles/3/Cool-Avatar-PNG-High-Quality-Image.png"
      />
    </div>
  );
}

export default Header;
