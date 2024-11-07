import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../EnquiryForm/Admin.css';
import Overlay from './layer';
import CityCalendar from '../../MainPages/Components/Calender';

const cities = ["Hyderabad", "Guntur", "Bangalore"];

const AdminPanel = () => {
    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
        city: "Select Place", 
        message: "",
        start: null,
        end: null
    });
    const [error, setError] = useState("");
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [bookedDates, setBookedDates] = useState([]);
    const [currentCity, setCurrentCity] = useState("Hyderabad");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://sbhr-back-1.onrender.com/api/v1/get/${currentCity}`);
                setSubmittedData(response.data);

                const booked = response.data.map(item => ({
                    start: new Date(item.start),
                    end: new Date(item.end)
                }));
                setBookedDates(booked);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentCity]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleDateChange = (date, name) => {
        setValues({ ...values, [name]: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!values.name || !values.number || !values.email || !values.city || !values.message || !values.start || !values.end) {
            setError("All fields are required");
            return;
        }
        if (values.end < values.start) {
            setError("End date cannot be before the start date.");
            return;
        }

        try {
            const formattedValues = {
                ...values,
                start: values.start.toISOString(),
                end: values.end.toISOString()
            };

            if (editingId) {
                await axios.put(`https://sbhr-back-1.onrender.com/api/v1/update/${editingId}`, formattedValues);
                setOverlayMessage("Data updated successfully!");
            } else {
                await axios.post(`https://sbhr-back-1.onrender.com/api/v1/post/${currentCity}`, formattedValues);
                setOverlayMessage("Data submitted successfully!");
            }

            setOverlayVisible(true);
            const updatedResponse = await axios.get(`https://sbhr-back-1.onrender.com/api/v1/get/${currentCity}`);
            setSubmittedData(updatedResponse.data);
            const updatedBookedDates = updatedResponse.data.map(item => ({
                start: new Date(item.start),
                end: new Date(item.end)
            }));
            setBookedDates(updatedBookedDates);
            setValues({
                name: "",
                number: "",
                email: "",
                city: currentCity, 
                message: "",
                start: null,
                end: null
            });
            setEditingId(null);
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("An error occurred. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://sbhr-back-1.onrender.com/api/v1/delete/${id}`);
            setOverlayMessage("Data deleted successfully!");
            setOverlayVisible(true);
            const updatedResponse = await axios.get(`https://sbhr-back-1.onrender.com/api/v1/get/${currentCity}`);
            setSubmittedData(updatedResponse.data);
            const updatedBookedDates = updatedResponse.data.map(item => ({
                start: new Date(item.start),
                end: new Date(item.end)
            }));
            setBookedDates(updatedBookedDates);
        } catch (error) {
            console.error("Error deleting data:", error);
            setError("An error occurred. Please try again.");
        }
    };

    const handleEdit = (data) => {
        setValues({
            name: data.name,
            number: data.number,
            email: data.email,
            city: data.city,
            message: data.message,
            start: new Date(data.start),
            end: new Date(data.end)
        });
        setEditingId(data._id);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
    };

    const isBookedDate = (date) => {
        return bookedDates.some(({ start, end }) =>
            date >= start && date <= end
        );
    };

    return (
        <div className='admin-panel' style={{
            paddingTop: '150px',
            backgroundColor: 'grey',

        }}>
            <div className='city-selector'>
                <label>
                    Select City:
                    <select value={currentCity} onChange={(e) => setCurrentCity(e.target.value)}>
                        {cities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className='submitted-data'>
                <h3>{currentCity} Submitted Data</h3>
                <table id='customers'>
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Message</th>
                            <th>Delete/Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td>{new Date(data.createdAt).toLocaleString("en-GB", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                <td>{data.name}</td>
                                <td>{data.number}</td>
                                <td>{data.email}</td>
                                <td>{data.city}</td>
                                <td>{new Date(data.start).toLocaleDateString("en-GB")}</td>
                                <td>{new Date(data.end).toLocaleDateString("en-GB")}</td>
                                <td>{data.message}</td>
                                <td style={{
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    gap: '30px',
                                    alignItems: 'center',
                                }}>
                                    <PiNotePencil onClick={() => handleEdit(data)} style={{ cursor: 'pointer' }} />
                                    <MdDelete onClick={() => handleDelete(data._id)} style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='aboutus-container'>
                <form onSubmit={handleSubmit}>
                    <h3>Contact Form</h3>
                    {error && <p className='error'>{error}</p>}
                    <label>
                        <input
                            type='text'
                            placeholder='Name'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            placeholder='Number'
                            name='number'
                            value={values.number}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type='text'
                            placeholder='City'
                            name='city'
                            value={values.city}
                            onChange={handleChange}
                            readOnly
                        />
                    </label>
                    <label>
                        Start Date:
                        <DatePicker
                            selected={values.start}
                            onChange={(date) => handleDateChange(date, 'start')}
                            selectsStart
                            startDate={values.start}
                            endDate={values.end}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select start date"
                            className="start-date-picker"
                            dayClassName={(date) =>
                                isBookedDate(date) ? 'react-datepicker__day--disabled' : undefined
                            }
                        />
                    </label>
                    <label>
                        End Date:
                        <DatePicker
                            selected={values.end}
                            onChange={(date) => handleDateChange(date, 'end')}
                            selectsEnd
                            startDate={values.start}
                            endDate={values.end}
                            minDate={values.start ? values.start : new Date()}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select end date"
                            className="end-date-picker"
                            dayClassName={(date) =>
                                isBookedDate(date) ? 'react-datepicker__day--disabled' : undefined
                            }
                        />
                    </label>
                    <label>
                        <textarea
                            placeholder='Message'
                            name='message'
                            value={values.message}
                            onChange={handleChange}
                        />
                    </label>
                    <button type='submit'>{editingId ? 'Update' : 'Submit'}</button>
                </form>
            </div>

            {overlayVisible && <Overlay message={overlayMessage} onClose={closeOverlay} />}
            <CityCalendar />
        </div>
    );
};

export default AdminPanel;