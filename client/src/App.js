import './App.css';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/home';
import NavBar from './components/navbar';
import Motors from './components/motors';
import Login from './components/login';
import AboutUs from './components/about';
import Footer from './components/footer';
import ViewCarDetails from './components/details';
import AdminDashboard from './components/admin';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  // Update the currentPage based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setCurrentPage(1);
        break;
      case '/motors':
        setCurrentPage(2);
        break;
      case '/about':
        setCurrentPage(3);
        break;
      default:
        setCurrentPage(1); // Set default page to 1 for other routes
        break;
    }
  }, [location.pathname]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(pageNumber === 1 ? '/' : pageNumber === 2 ? '/motors' : '/about');
  };

  return (
    <div className="home-page">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/motors" element={<Motors />} />
        <Route path="/motors/:id" element={<ViewCarDetails />} />
        <Route path="/login" component={Login} />
        {accessToken && <Route path="/admin-dashboard" component={AdminDashboard} />}
        <Route path="/premiere/admin" render={() => <div>{accessToken ? 'Welcome Admin!' : 'Please log in.'}</div>} />
      </Routes>

      <div className="join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked={currentPage === 1}
          onClick={() => goToPage(1)}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
          checked={currentPage === 2}
          onClick={() => goToPage(2)}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
          checked={currentPage === 3}
          onClick={() => goToPage(3)}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
