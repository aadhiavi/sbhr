import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Overlay from './Overlay';
import './Admin.css';

const FormData = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        message: ''
    });
    const [connections, setConnections] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        fetchConnections();
    }, []);

    const fetchConnections = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/get-connect');
            setConnections(response.data.data);
        } catch (error) {
            console.error('Error fetching connections:', error);
        }
    };

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
            const url = isUpdating 
                ? `http://localhost:5000/api/v1/update-connect/${updateId}` 
                : 'http://localhost:5000/api/v1/add-connect';
            const method = isUpdating ? 'put' : 'post';
            const response = await axios[method](url, formData);
            
            setSuccess(response.data.message);
            setOverlayVisible(true);
            setError('');
            setFormData({ name: '', number: '', email: '', city: '', message: '' });
            if (!isUpdating) fetchConnections(); 
            setIsUpdating(false); 
        } catch (err) {
            setError(err.response?.data.message || 'Failed to submit');
            setSuccess('');
            setOverlayVisible(false);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/delete-connect/${id}`);
            fetchConnections();
        } catch (error) {
            console.error('Error deleting connection:', error);
        }
    };

    const handleEdit = (connection) => {
        setFormData({
            name: connection.name,
            number: connection.number,
            email: connection.email,
            city: connection.city,
            message: connection.message
        });
        setUpdateId(connection._id);
        setIsUpdating(true);
    };

    return (
        <div style={{paddingTop:'150px'}}>
            {overlayVisible && (
                <Overlay
                    message="Thank you! Your submission has been received."
                    onClose={() => setOverlayVisible(false)}
                />
            )}
            <h1>Connect Table</h1>
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
                    {loading ? 'Submitting...' : isUpdating ? 'Update' : 'Submit'}
                </button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table id='customers'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Message</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {connections.map((connection) => (
                        <tr key={connection._id}>
                            <td>{connection.name}</td>
                            <td>{connection.number}</td>
                            <td>{connection.email}</td>
                            <td>{connection.city}</td>
                            <td>{connection.message}</td>
                            <td>{new Date(connection.createdAt).toLocaleString()}</td>
                            <td>
                                <button onClick={() => handleEdit(connection)}>Edit</button>
                                <button onClick={() => handleDelete(connection._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormData;


