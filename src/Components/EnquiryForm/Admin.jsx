import React, { useState } from 'react';
import axios from 'axios';
import Overlay from './Overlay';
import './Admin.css';
const Admin = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        message: ''
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        setOverlayVisible(false); 

        try {
            const response = await axios.post('https://sbhr-back-1.onrender.com/api/v1/add-connect', formData);
            setSuccess(response.data.message);
            setOverlayVisible(true); 
            setError('');
            setFormData({ name: '', number: '', email: '', city: '', message: '' }); 
        } catch (err) {
            setError(err.response?.data.message || 'Failed to submit');
            setSuccess('');
            setOverlayVisible(false); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='aboutus-container'>
            {overlayVisible && (
                <Overlay
                    message="Thank you! Your submission has been received."
                    onClose={() => setOverlayVisible(false)}
                />
            )}
            <h3>CONTACT-US</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        placeholder='Name'
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <input
                        placeholder='Number'
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <input
                        placeholder='Email'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select City</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Guntur">Guntur</option>
                        <option value="Bangalore">Bangalore</option>
                    </select>
                </label>
                <label>
                    <textarea
                        placeholder='Message'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Admin;

