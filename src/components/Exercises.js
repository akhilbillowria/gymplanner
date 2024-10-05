// src/components/Exercises.js

import React, { useEffect, useState } from 'react';
import '../styles/Exercises.css';

const Exercises = () => {
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingBodyParts, setLoadingBodyParts] = useState(true);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [error, setError] = useState(null);

  // Hardcoded API key
  const apiKey = '3a48363eb3mshe6c7276bbfe6209p1a171bjsn1412c2f0cc6c';
  const apiHost = 'exercisedb.p.rapidapi.com';

  // Fetch the list of body parts when the component mounts
  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const response = await fetch(`https://${apiHost}/exercises/bodyPartList`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBodyParts(data);
        // Set the first body part as selected by default
        if (data.length > 0) {
          setSelectedBodyPart(data[0]);
        }
      } catch (error) {
        console.error('Error fetching body parts:', error);
        setError('Failed to load body parts. Please try again later.');
      } finally {
        setLoadingBodyParts(false);
      }
    };

    fetchBodyParts();
  }, [apiKey, apiHost]);

  // Fetch exercises when the selected body part or search term changes
  useEffect(() => {
    if (selectedBodyPart) {
      const fetchExercises = async () => {
        setLoadingExercises(true);
        try {
          let url = `https://${apiHost}/exercises/bodyPart/${selectedBodyPart}?limit=10`;
          
          // If search term is present, use the search endpoint
          if (searchTerm.trim() !== '') {
            url = `https://${apiHost}/exercises/name/${encodeURIComponent(searchTerm)}?limit=10`;
          }

          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': apiKey,
              'X-RapidAPI-Host': apiHost,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          let data = await response.json();
          // Limit to 10 exercises
          if (data.length > 10) {
            data = data.slice(0, 15);
          }
          setExercises(data);
        } catch (error) {
          console.error('Error fetching exercises:', error);
          setError('Failed to load exercises. Please try again later.');
        } finally {
          setLoadingExercises(false);
        }
      };

      fetchExercises();
    }
  }, [selectedBodyPart, searchTerm, apiKey, apiHost]);

  if (loadingBodyParts) {
    return <div className="loader">Loading body parts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="exercises-container">
      <h2 className="section-title">Exercise Library</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Switch for body parts */}
      <div className="body-parts-switch">
        {bodyParts.map((bodyPart) => (
          <button
            key={bodyPart}
            className={`body-part-button ${selectedBodyPart === bodyPart && searchTerm === '' ? 'active' : ''}`}
            onClick={() => {
              setSelectedBodyPart(bodyPart);
              setSearchTerm('');
            }}
          >
            {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
          </button>
        ))}
      </div>

      {loadingExercises ? (
        <div className="loader">Loading exercises...</div>
      ) : (
        <div className="exercises-grid">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <div className="image-container" data-name={exercise.name}>
                <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image" />
              </div>
              <div className="exercise-info">
                <h3 className="exercise-name">{exercise.name}</h3>
                <p className="exercise-details">
                  <strong>Target:</strong> {exercise.target}<br />
                  <strong>Equipment:</strong> {exercise.equipment}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Exercises;
