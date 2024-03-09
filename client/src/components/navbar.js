import { Link } from "react-router-dom";
import logo from "../logo1.png";

import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="Premiere " /> 
      </div> 
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/insurance" className="hover:underline">
            Insurance Agency
          </Link>
        </li>
        <li>
          <Link to="/premiere" className="hover:underline">
            Premire Motors
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
