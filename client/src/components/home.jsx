import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Pemire Group
      </h1>
      <p className="text-center mb-8">
        Explore our insurance agency and car dealership in Mombasa.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Insurance Agency</h2>
          <p className="text-center">
            Details about the insurance agency can be placed here.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Pemire Motors</h2>
          <p className="text-center">
            Details about the car dealership can be placed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;