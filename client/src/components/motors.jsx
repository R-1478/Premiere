import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Motors = () => {
  const [motors, setMotors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://premiere.onrender.com/motors')
      .then(response => response.json())
      .then(data => setMotors(data))
      .catch(error => console.error('Error fetching motors:', error));
  }, []);

  const viewDetails = (motorId) => {
    navigate(`/motors/${motorId}`);
  }

  return (
    <div className="motors-container">
      {motors.map(motor => (
        <div key={motor.id} className="card" onClick={() => viewDetails(motor.id)}>
          <div className="top-section">
            <img src={motor.image} alt="car" className="car-image" />
          </div>
          <div className="bottom-section">
            <span className="title">{motor.name}</span>
            <div className="row row1">
              <div className="item">
                <span className="big-text">{motor.price}</span>
                <span className="regular-text">{motor.type}</span>
              </div>
              <div className="item">
                <span className="big-text">100%</span>
                <span className="regular-text">{motor.description}</span>
              </div>
              <div className="item">
                <span className="big-text">buy from us</span>
                <span className="regular-text">TODAY!</span>
              </div>
            </div>
          </div>
          <button className="btn-maroon btn-wide bg-maroon-500 text-white" onClick={(e) => { e.stopPropagation(); viewDetails(motor.id); }}>View Car</button>
        </div>
      ))}
    </div>
  );
};

export default Motors;
