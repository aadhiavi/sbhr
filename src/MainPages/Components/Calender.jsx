import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import '../Components/Calender.css';

const CityCalendar = () => {
    const [city, setCity] = useState('Hyderabad');
    const [value, setValue] = useState(new Date());
    const [blockedDates, setBlockedDates] = useState([]);
    const [activeDate, setActiveDate] = useState(null); 

    const cities = ['Hyderabad', 'Guntur', 'Bangalore'];

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/get/${city}`);
                const contacts = response.data;

                const dates = contacts.flatMap(contact => {
                    const start = new Date(contact.start);
                    const end = new Date(contact.end);
                    const blockedDatesInRange = [];

                    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                        blockedDatesInRange.push(d.toISOString().split('T')[0]);
                    }

                    return blockedDatesInRange;
                });

                setBlockedDates(dates);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchContacts();
    }, [city]);

    const tileClassName = ({ date }) => {
        const dateString = date.toISOString().split('T')[0];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date < today) {
            return 'disabled';
        }
        if (blockedDates.includes(dateString)) {
            return 'blocked';
        }
        if (activeDate && dateString === activeDate.toISOString().split('T')[0]) {
            return 'active';
        }
        return 'available';
    };

    const handleDateChange = (newDate) => {
        setValue(newDate);
        setActiveDate(newDate); 
    };

    const isSelectedDateBlocked = () => {
        const selectedDateString = value.toISOString().split('T')[0];
        return blockedDates.includes(selectedDateString);
    };

    return (
        <div className="calendar-container">
              <h2 className="calendar-title-name">Choose your date for {city}</h2>
            <div className="select-div">
                <h2 className="calendar-title">Select City</h2>
                <select
                    className="city-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    {cities.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
            <Calendar
                onChange={handleDateChange} 
                value={value}
                tileClassName={tileClassName}
                className="custom-calendar"
            />

            <div className="date-status" style={{ marginTop: '20px', fontSize: '18px', textAlign:'center'}}>
                {isSelectedDateBlocked() ? (
                    <span style={{ color: 'red' }}>Selected date is blocked.</span>
                ) : (
                    <span style={{ color: 'green' }}>Selected date is available.</span>
                )}
            </div>
        </div>
    );
};

export default CityCalendar;






