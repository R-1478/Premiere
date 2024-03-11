import React, { useEffect, useState } from 'react';

const Motors = () => {
  const [motors, setMotors] = useState([]);

  useEffect(() => {
    fetch('https://premiere.onrender.com/motors')
      .then(response => response.json())
      .then(data => setMotors(data))
      .catch(error => console.error('Error fetching motors:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {motors.map(motor => (
      <div key={motor.id} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          alt="car"
          src={motor.image}
          className="h-64 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{motor.type}</h3>
          <p className="mt-2 text-gray-700">{motor.description}</p>
          <p className="mt-2 font-bold text-blue-850">{motor.price}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Motors;
