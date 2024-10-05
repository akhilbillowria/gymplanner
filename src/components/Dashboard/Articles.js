// src/components/Articles.js

import React, { useEffect, useState } from 'react';
import '../../styles/Dashboard/Articles.css'; // Ensure you have the corresponding CSS file
// src/components/Articles.js

const Articles = () => {
  // State variables
  const [articles, setArticles] = useState([]); // To store fetched articles
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state
  const [page, setPage] = useState(1); // Current page number
  const [totalPages, setTotalPages] = useState(0); // Total number of pages available

  // Constants
  const pageSize = 10; // Number of articles per page
  const query = 'gym'; // Search query to fetch gym-related articles

  // Hardcoded API key
  const apiKey = '927242cf-aa9e-4da6-8f29-952a02ddbea8';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Construct the API URL
        const url = `https://content.guardianapis.com/search?q=${encodeURIComponent(
          query
        )}&show-fields=thumbnail,trailText&api-key=${apiKey}&page=${page}&page-size=${pageSize}`;

        // Make the API request
        const response = await fetch(url);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Check if the API returned an error
        if (data.response.status !== 'ok') {
          throw new Error(data.response.message || 'Failed to fetch articles');
        }

        // Update state with fetched articles
        setArticles(data.response.results);

        // Calculate total pages based on total results
        const calculatedTotalPages = Math.ceil(data.response.total / pageSize);
        setTotalPages(calculatedTotalPages);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchArticles();
  }, [page]); // Re-run effect when 'page' changes

  // Handler for Previous button
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  // Handler for Next button
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // Render loading state
  if (loading) {
    return <div className="loader">Loading articles...</div>;
  }

  // Render error state
  if (error) {
    return <div className="error">Error fetching articles: {error}</div>;
  }

  // Render articles
  return (
    <div className="articles-container">
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            {/* Display thumbnail if available */}
            {article.fields && article.fields.thumbnail && (
              <img
                src={article.fields.thumbnail}
                alt={article.webTitle}
                className="article-image"
                loading="lazy"
              />
            )}
            <div className="article-content">
              <h3 className="article-title">{article.webTitle}</h3>
              {/* Display trail text if available */}
              {article.fields && article.fields.trailText && (
                <p
                  className="article-description"
                  dangerouslySetInnerHTML={{ __html: article.fields.trailText }}
                ></p>
              )}
              <a
                href={article.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1} className="pagination-button">
          Previous
        </button>
        <span className="pagination-info">
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages} className="pagination-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Articles;
