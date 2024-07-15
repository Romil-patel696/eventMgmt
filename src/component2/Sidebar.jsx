import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile-icon.png" alt="Profile" />
        <h3>Username</h3>
        <p>user@example.com</p>
      </div>
      <div className="nav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/my-events">
          <button>My Events</button>
        </Link>
        <Link to="/add-event">
          <button>Add Event</button>
        </Link>
        <Link to="/settings">
          <button>Settings</button>
        </Link>
      </div>
      <div className="favorites">
        <h4>Favorites</h4>
        <ul>
          <li>Important</li>
          <li>Work</li>
          <li>Personal</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
