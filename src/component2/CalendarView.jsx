import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css'; // You can create your CSS file for styling

import { EventContext } from '../contexts/EventContext';

const CalendarView = () => {
    const { events } = useContext(EventContext);
    const [selectedDate, setSelectedDate] = useState(null);

    // Helper function to check if there are events on a given date
    const hasEventsOnDate = (date) => {
        const eventOnDate = events.find(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === date.toDateString();
        });
        return !!eventOnDate;
    };

    // Function to format the date for tileClassName prop
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            return hasEventsOnDate(date) ? 'has-events' : '';
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // You can add more logic here to handle date selection
    };

    return (
        <div className="calendar-view">
            <h2>Calendar View</h2>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={tileClassName}
            />
        </div>
    );
};

export default CalendarView;
