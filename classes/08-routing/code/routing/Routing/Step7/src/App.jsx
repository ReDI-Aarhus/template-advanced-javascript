import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent';
import GoToHome from './components/GoToHome';
import SearchComponent from './components/SearchComponent';
import LocationDisplayComponent from './components/LocationDisplayComponent';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Router>
          <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
              </ul>
            </nav>
          <div>
            <RoutesComponent />
          </div>
          <GoToHome />
          <SearchComponent />
          <LocationDisplayComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
