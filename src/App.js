import React, { useState, useEffect } from 'react';
import './MyComponent.css'; // Import the CSS file for styling

const MyComponent = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
      .then(response => response.json())
      .then(data => {
        setCandidates(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const appliedCandidates = candidates.filter(candidate => candidate.status === 'Applied');
  const rejectedCandidates = candidates.filter(candidate => candidate.status === 'Rejected');
  const acceptedCandidates = candidates.filter(candidate => candidate.status === 'Accepted');

  return (
    <div className="container">
      <div className="section s1">
        <h2>Applied</h2>
        {appliedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.last_updated_at}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.location}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.gender}
            </p>
          </div>
        ))}
      </div>

      <div className="section s2">
        <h2>Accepted</h2>
        {acceptedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.last_updated_at}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.location}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              Gender: {candidate.gender}
            </p>
          </div>
        ))}
      </div>

      <div className="section s3">
        <h2>Rejected</h2>
        {rejectedCandidates.map(candidate => (
          <div key={candidate.id} className="card">
            <h3>{candidate.name}</h3>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.last_updated_at}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.location}
            </p>
            <p>
              <img src="https://via.placeholder.com/18x18" alt="Placeholder Icon" className="icon" />
              {candidate.gender}
            </p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default MyComponent;