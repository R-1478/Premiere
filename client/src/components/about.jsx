// AboutUs.jsx

import React from 'react';
import logo from "../png prem.png";
import logo2 from "../png 2.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-screen w-full max-w-screen-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">About Premiere Group</h2>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img src={logo} alt="Insurance" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Insurance Services</h3>
            <p className="text-gray-700 leading-relaxed">
              Premiere Group offers comprehensive insurance solutions tailored to your needs. Whether you're looking for auto insurance, home insurance, or business insurance, we've got you covered.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img src={logo2} alt="Motor Dealer" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Motor Dealership</h3>
            <p className="text-gray-700 leading-relaxed">
              Looking for your dream car? Premiere Group is your one-stop destination for high-quality vehicles. Explore our wide range of cars, trucks, and SUVs, and drive home your perfect match today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
