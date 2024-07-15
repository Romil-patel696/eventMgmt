// EventContext.jsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const initialEntities = {
  events: [],
  users: [],
  attachment:[]
};

const EventContext = createContext(initialEntities);

const EventProvider = ({ children }) => {
  const [entities, setEntities] = useState(initialEntities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEntity = useCallback(async (entityName, endpoint) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/${endpoint}`);
      setEntities(prevEntities => ({
        ...prevEntities,
        [entityName]: response.data,
      }));
      console.log("done")
    } catch (error) {
      setError(error);
      console.error(`Error fetching ${entityName}`, error);
    } finally {
      setLoading(false);
    }
  }, []);

 const deleteEntity = useCallback(async (entityName, id) => {
    try {
      await axios.delete(`http://localhost:5000/${entityName}/${id}`);
      setEntities(prevEntities => ({
        ...prevEntities,
        [entityName]: prevEntities[entityName].filter(entity => entity.eventId !== id),
      }));
      fetchEntity(entityName, entityName);
    } catch (error) {
      console.error(`Error deleting ${entityName}`, error);
    }
  },[]);

  useEffect(() => {
    fetchEntity('events', 'events');
    fetchEntity('users', 'users');
    fetchEntity('attachment', 'attachments');
    //add more fetchEntity calls for other entities.
  }, [fetchEntity]);

 

  // Define updateEntity function similarly


  return (
    <EventContext.Provider value={{
      entities,
      loading,
      error,
      fetchEntity,
      deleteEntity,
      // Add more functions as needed (e.g., updateEntity)
    }}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };


// const EventProvider = ({ children }) => {
//     const [events, setEvents] = useState([]);
//     const [filteredEvents, setFilteredEvents] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const fetchEvents = useCallback(async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get('http://localhost:5000/events');

//             setEvents(response.data);
//             setFilteredEvents(response.data);
//             // change for posgreSQL
//             // setEvents(response.data.data);
//             // setFilteredEvents(response.data.data);
//         } catch (error) {
//             setError(error);
//             console.error('Error fetching events', error);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         fetchEvents();
//     }, [fetchEvents]);

//     const handleAddEvent = async (event) => {
//         try {
//             await axios.post('http://localhost:5000/events', event);
//             fetchEvents(); 
//         } catch (error) {
//             setError(error);
//             console.error('Error adding event', error);
//         }
//     };

//     const deleteEvent = async (id ) => {
//         try {
//           await axios.delete(`http://localhost:5000/events/${id}`);
//           setEvents(events.filter(event => event.id !== id));
//           fetchEvents();
//         } catch (error) {
//           console.error('Error deleting event', error);
//         }
       
//       };
// ////////////////////////////////////////////


    
//       const updateEvent=async(id, event)=>{
//         try{
//             await axios.put(`http://localhost:5000/events/${id}`, event);
//             fetchEvents();
//         }catch (error) {
//                 setError(error)
//             console.error('Error updating event', error);
//         }

//       }





//     return (
//         <EventContext.Provider value={{
//             events,
//             setEvents,
//             setFilteredEvents,
//             loading,
//             setLoading,
//             error,
//             setError,
//             filteredEvents,
//             handleAddEvent,
//             deleteEvent,
//             updateEvent
//         }}>
//             {children}
//         </EventContext.Provider>
//     );
// };

// export { EventContext, EventProvider };
