import React from 'react';
import Sidebar from './component2/Sidebar';
import MyEvents from './component2/MyEvents';
import Dashboard from './component2/Dashboard';
import AddEvent from './component2/AddEvent';
import Settings from './component2/Settings';
import EventDetails from './component2/EventDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App2.css';
import { EventProvider } from './contexts/EventContext';
import EditEvent from './component2/EditEvent';
const App = () => {
  return (
   <EventProvider>
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/my-events" element={<MyEvents />} />
           <Route path="/event/:id" element={<EventDetails/>} />
            
            <Route path="/add-event" element={<AddEvent/>} />
            <Route path="/edit-event/:id" element={<EditEvent/>}/>
            
            <Route path="/settings" element={<Settings/>} />
          </Routes>
          
        </div>
      </div>
    </Router>
    </EventProvider>
  );
};

export default App;


