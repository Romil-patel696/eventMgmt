// EventDetails.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {entities,
    deleteEntity } = useContext(EventContext);
  // const [event, setEvent] = useState((entities.events.filter((elem)=>elem.eventId==id))[0]);
  const event= useState((entities.events.filter((elem)=>elem.eventId==id))[0]);

  // useEffect(() => {
  //   const fetchEvent = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/events/${id}`);
  //       setEvent(response.data);
  //     } catch (error) {
  //       console.error('Error fetching event details', error);
  //     }
  //   };

  //   fetchEvent();
  // }, [id]);


  const handleDelete = async (e) => {
    e.preventDefault();
    deleteEntity('events',id);
    navigate('/my-events');
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="event-details">
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Organizer:</strong> {event.organizer}</p>
      <p><strong>Capacity:</strong> {event.capacity}</p>
      
      <button onClick={handleDelete}>Delete Event</button>
      <Link className="edit-event" to={`/edit-event/${id}`}>
        <button>Edit Event</button>
      </Link>
    </div>
  );
};

export default EventDetails;
