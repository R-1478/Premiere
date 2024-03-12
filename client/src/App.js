import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/home';
import NavBar from './components/navbar';
import Motors from './components/motors'


function App() {
  return (
    <div className="home-page">
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      {/* <Route path="/premiere" element={<Admin />} /> */}
      {/* <Route path="/insurance" element={<Insurance />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/motors" element={<Motors />} />
      {/* <Route path="/about" element={<About />} /> */}

      </Routes>
    </div>
  );
}

export default App;
