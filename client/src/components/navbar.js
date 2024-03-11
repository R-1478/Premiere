import { Link } from "react-router-dom";
import logo from "../png prem.png";


import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center">
      <div className="logo mr-auto">
        <img src={logo} alt="Premiere" className="h-20 w-auto" /> 
      </div> 
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="flex space-x-4 ml-auto">
        <li>
          <Link to="/insurance" className="hover:underline">
            Insurance Agency
          </Link>
        </li>
        <li>
          <Link to="/motors" className="hover:underline">
            Premiere Motors
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
