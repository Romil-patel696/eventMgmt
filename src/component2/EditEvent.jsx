import  { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../contexts/EventContext';

const EditEvent = () => {
    const {updateEvent, events}=useContext(EventContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState((events.filter((eve)=>eve.id==id))[0]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prevEvent => ({
            ...prevEvent,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
            updateEvent(id, event)
        e.preventDefault();
     navigate(`/event/${id}`);

    };

    return (
        <div>
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={event.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Event</button>
            </form>
        </div>
    );
};

export default EditEvent;
