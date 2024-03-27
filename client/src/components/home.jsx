import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCar , faStar} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="flex justify-center">
      {/* Background Image */}
      <div
        className="inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/8441870/pexels-photo-8441870.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      >
        {/* Overlay */}
        <div className="inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-0 text-white container w-auto mx-auto py-12 md:container">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-[#424242]">Welcome to Premiere Insurance Agency</h2>
          <p className="text-lg">Your trusted partner for comprehensive insurance solutions</p>
        </div>
        
        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">  
          {/* Insurance Services Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="list-disc pl-6">
              <li>Auto Insurance</li>
              <li>Home Insurance</li>
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Business Insurance</li>
            </ul>
          </div>
          
          {/* Blog Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Why Insurance Matters</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
        
        {/* Stats and Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Stats Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Stats</h3>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCar} className="text-3xl mr-2" />
              <span className="text-xl">500+ Vehicles Insured</span>
            </div>
            {/* Add more stats */}
          </div>
          
          {/* Reviews Card */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>
            <div className="mb-2">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </div>
            <p className="mb-2">"Great experience! Premiere Insurance helped me find the perfect policy for my needs."</p>
            <p className="text-sm">- John Doe</p>
            {/* Add more reviews */}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="text-center">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg mr-4 hover:bg-blue-600">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Reach Out
          </button>
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
            Continue to Premiere Motors
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
