import React, { useState, useEffect } from 'react';

const Motors = () => {
  const [motors, setMotors] = useState([]);

  useEffect(() => {
    fetchMotors();
  }, []);

  const fetchMotors = async () => {
    try {
      const response = await fetch('https://premiere.onrender.com/motors');
      const data = await response.json();
      setMotors(data);
    } catch (error) {
      console.error('Error fetching motors:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Buy your dream car today!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {motors.map((motor) => (
          <div key={motor.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={motor.image} alt={motor.type} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{motor.type}</h2>
              <p className="text-gray-600 mb-2">{motor.description}</p>
              <p className="text-lg font-bold">${motor.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motors;
