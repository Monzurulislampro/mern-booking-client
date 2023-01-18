import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        {" "}
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Fligth</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">Booking.com</h1>
        <p className="headerDisc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illum.
          Voluptatibus magnam aliquam maiores consequatur quae, adipisci
          distinctio pariatur unde.
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
