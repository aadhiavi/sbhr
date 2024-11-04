// src/components/Consent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Consent = () => {
  const [hasConsented, setHasConsented] = useState(null);
  
  // Retrieve data from local storage
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');
  const userId = localStorage.getItem('userId') || '_Id'; // Replace with actual user ID retrieval

  useEffect(() => {
    const checkConsent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/consent/${userId}`);
        setHasConsented(response.data.consentGiven);
      } catch (error) {
        console.error("Error fetching consent", error);
      }
    };
    checkConsent();
  }, [userId]);

  const handleConsent = async (consentGiven) => {
    setHasConsented(consentGiven);

    try {
      await axios.post('http://localhost:5000/api/v1/consent', {
        userId,
        consentGiven,
        email, // Send email
        phone, // Send phone number
      });
    } catch (error) {
      console.error("Error saving consent", error);
    }
  };

  if (hasConsented === null) {
    return (
      <div>
        <p>Do you consent to share your data with us?</p>
        <button onClick={() => handleConsent(true)}>Agree</button>
        <button onClick={() => handleConsent(false)}>Reject</button>
      </div>
    );
  }

  return (
    <div>
      {hasConsented ? (
        <p>Thank you for consenting!</p>
      ) : (
        <p>You have rejected data sharing.</p>
      )}
    </div>
  );
};

export default Consent;






