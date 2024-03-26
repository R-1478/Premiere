import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [newMotor, setNewMotor] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    
  });

  const [motors, setMotors] = useState([]);

  useEffect(() => {
    // Fetch existing motors from the backend
    fetch('https://backend-url.com/motors')
      .then(response => response.json())
      .then(data => setMotors(data))
      .catch(error => console.error('Error fetching motors:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMotor(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send new motor data to the backend
    fetch('https://backend-url.com/motors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMotor)
    })
      .then(response => response.json())
      .then(data => {
        // Update the motors list with the newly added motor
        setMotors(prevMotors => [...prevMotors, data]);
        // Reset the newMotor state
        setNewMotor({
          name: '',
          description: '',
          price: '',
          image: '',
          // Reset other fields as needed
        });
      })
      .catch(error => console.error('Error adding new motor:', error));
  };

  const handleDelete = (motorId) => {
    // Delete the motor from the backend
    fetch(`https://backend-url.com/motors/${motorId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted motor from the motors list
          setMotors(prevMotors => prevMotors.filter(motor => motor.id !== motorId));
        } else {
          throw new Error('Failed to delete motor');
        }
      })
      .catch(error => console.error('Error deleting motor:', error));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Form for adding new motor */}
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="name"
          value={newMotor.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="input mb-2"
        />
        <input
          type="text"
          name="description"
          value={newMotor.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="input mb-2"
        />
        <input
          type="text"
          name="price"
          value={newMotor.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="input mb-2"
        />
        <input
          type="text"
          name="image"
          value={newMotor.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="input mb-2"
        />
        {/* Add more input fields for other motor details */}
        <button type="submit" className="btn btn-primary">Add Motor</button>
      </form>

      {/* List of existing motors with delete buttons */}
      <div className="grid grid-cols-1 gap-4">
        {motors.map(motor => (
          <div key={motor.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{motor.name}</h2>
            <p className="text-gray-600 mb-2">{motor.description}</p>
            <p className="text-gray-600 mb-2">{motor.price}</p>
            <img src={motor.image} alt={motor.name} className="w-full mb-2" />
            {/* Add more details or styling as needed */}
            <button onClick={() => handleDelete(motor.id)} className="btn btn-red">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
