import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

const ViewCarDetails = () => {
  const location = useLocation();
  const [motor, setMotor] = useState(null);

  useEffect(() => {
    const motorId = location.pathname.split('/').pop();
    fetch(`https://premiere.onrender.com/motors/${motorId}`)
      .then(response => response.json())
      .then(data => setMotor(data))
      .catch(error => console.error('Error fetching motor details:', error));
  }, [location.pathname]);

  if (!motor) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  return (
    <div className="car-card-container w-1200 flex justify-center ">
      <div className="car-card lg:card-side bg-base-100 shadow-xl rounded-lg flex flex-col justify-between">
        <div className="top-section">
          <figure>
          <img src={motor.image} alt="car" className="car-image w-full" />

          </figure>
        </div>
        <div className="bottom-section bg-blue-600 rounded-b-lg">
          <div className="card-body">
            <h2 className="card-title">{motor.name}</h2>
            <p>{motor.description}</p>
            <p>{motor.price}</p>
            <p>{motor.model}</p>
            <p>{motor.engine_number}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-maroon">Primary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ViewCarDetails
