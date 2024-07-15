import React, { useContext, useState } from 'react';
import {EventContext} from '../contexts/EventContext'
import './AddEvent.css';

const AddEvent = () => {
  const {handleAddEvent}=useContext(EventContext)
  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    attendees: []
  });

  const handleChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await handleAddEvent(event);
      setEvent({
        name: '',
        date: '',
        location: '',
        description: '',
        attendees: []
      })
      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event.');
    }
  };


  return (
    <div className="add-event">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name</label>
          
          <input
           type="text"
            name="name" 
            id="name" 
            placeholder="Event Name"
             value={event.name}
              onChange={handleChange}
               required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
          type="text"
           name="location" 
           id="location"
           placeholder="Location" 
           value={event.location} 
           onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
          name="description"
            id="description"
            placeholder="Description"
            value={event.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
