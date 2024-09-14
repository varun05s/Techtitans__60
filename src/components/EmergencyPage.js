import React, { useState } from 'react';
import './EmergencyPage.css';

const EmergencyPage = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleEmergencyClick = () => {
    setConfirmationVisible(true);
  };

  const confirmEmergency = () => {
    // Send location to the nearest police station
    console.log('Emergency button clicked! Sending location to the nearest police station.');

    // Hide confirmation
    setConfirmationVisible(false);
  };

  const cancelEmergency = () => {
    setConfirmationVisible(false);
  };

  return (
    <div className="emergency-page">
      <div className="emergency-content">
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            Please use this emergency button only in genuine emergencies. 
            Misuse of this button may result in strict legal action. 
            Ensure you have a valid reason for using this feature.
          </p>
        </div>
        <button className="emergency-button" onClick={handleEmergencyClick}>
          Emergency
        </button>
        <div className="emergency-description">
          <h3>What this button does:</h3>
          <ul>
            <li>Immediately alerts the nearest police station.</li>
            <li>Sends your current location to authorities.</li>
            <li>Used only for genuine emergencies.</li>
          </ul>
        </div>
        {confirmationVisible && (
          <div className="confirmation-dialog">
            <h3>Are you sure?</h3>
            <p>Confirm that you want to send an emergency alert to the nearest police station.</p>
            <button onClick={confirmEmergency}>Yes, Send Alert</button>
            <button onClick={cancelEmergency}>No, Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyPage;
