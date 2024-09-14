import React, { useState } from 'react';
import './AnonymousPage.css';

const AnonymousPage = () => {
  const [crimeType, setCrimeType] = useState('');
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [evidence, setEvidence] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const crimeOptions = [
    { type: 'Vandalism', questions: ['Was property damaged?', 'Was graffiti involved?'] },
    { type: 'Theft', questions: ['Was it a vehicle theft?', 'Was it shoplifting?'] },
    { type: 'Assault', questions: ['Was a weapon involved?', 'Were there injuries?'] },
    { type: 'Robbery', questions: ['Was it armed robbery?', 'Were there multiple attackers?'] },
    { type: 'Burglary', questions: ['Was the property forcibly entered?', 'Was anything stolen?'] }
  ];

  const handleCrimeChange = (event) => {
    const selectedCrime = event.target.value;
    setCrimeType(selectedCrime);

    const selectedCrimeData = crimeOptions.find(crime => crime.type === selectedCrime);
    if (selectedCrimeData) {
      setQuestions(selectedCrimeData.questions);
      setResponses({});
      setEvidence({});
    } else {
      setQuestions([]);
    }
  };

  const handleInputChange = (question, event) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [question]: event.target.value
    }));
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map(file => URL.createObjectURL(file));
    setEvidence(prevEvidence => ({
      ...prevEvidence,
      [event.target.name]: fileArray
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!crimeType || Object.values(responses).includes('')) {
      alert('Please complete all fields before submitting.');
      return;
    }
    setShowDisclaimer(true);
  };

  const confirmSubmission = () => {
    console.log('Crime report submitted:', { crimeType, responses, evidence });
    setShowDisclaimer(false);
    setSubmitted(true);
    setCrimeType('');
    setQuestions([]);
    setResponses({});
    setEvidence({});
  };

  const cancelSubmission = () => {
    setShowDisclaimer(false);
  };

  return (
    <div className="anonymous-page">
      <h2>Report a Crime Anonymously</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="crimeType">Select Crime Type:</label>
          <select id="crimeType" value={crimeType} onChange={handleCrimeChange}>
            <option value="">--Select a Crime--</option>
            {crimeOptions.map((crime, index) => (
              <option key={index} value={crime.type}>
                {crime.type}
              </option>
            ))}
          </select>

          {crimeType && (
            <div className="crime-questions">
              <h3>Questions related to {crimeType}:</h3>
              {questions.map((question, index) => (
                <div key={index} className="question">
                  <label>{question}</label>
                  <input
                    type="text"
                    placeholder="Enter response"
                    value={responses[question] || ''}
                    onChange={(e) => handleInputChange(question, e)}
                  />
                </div>
              ))}
              <div className="upload-evidence">
                <label>Upload Evidence:</label>
                <input
                  type="file"
                  name="evidence"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleFileChange}
                />
                {evidence.evidence && (
                  <div className="evidence-preview">
                    {evidence.evidence.map((url, index) => (
                      <div key={index} className="evidence-item">
                        <img src={url} alt={`Evidence ${index}`} className="evidence-image" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {questions.length > 0 && !Object.values(responses).includes('') && (
            <button type="submit">Submit Crime Report</button>
          )}
        </form>
      ) : (
        <div>
          <h3>Thank you for your report! We will review it shortly.</h3>
          <button onClick={() => setSubmitted(false)}>Get Back</button>
        </div>
      )}

      {showDisclaimer && (
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            Please confirm that all the information provided is accurate and truthful. 
            Submitting false reports may lead to legal consequences.
          </p>
          <button onClick={confirmSubmission}>Yes, Submit Report</button>
          <button onClick={cancelSubmission}>No, Go Back</button>
        </div>
      )}
    </div>
  );
};

export default AnonymousPage;
