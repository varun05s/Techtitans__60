import React, { useState } from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [village, setVillage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have joined the community! You will receive notifications for nearby crime reports.');
    // Add your logic for handling form submission, e.g., sending data to a server
  };

  return (
    <div className="community-page">
      <h2>Join the Community</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label htmlFor="village">Village:</label>
        <input
          type="text"
          id="village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          required
        />

        <button type="submit">Join Community</button>
      </form>
    </div>
  );
};

export default CommunityPage;
