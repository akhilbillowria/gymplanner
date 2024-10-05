// src/components/ArticlesPage.js

import React from 'react';
import Articles from './Articles';
import '../../styles/Dashboard/ArticlesPage.css';

const ArticlesPage = () => {
  return (
    <div className="articles-page">
      <header className="articles-header">
        <h1>Health & Fitness Articles</h1>
        <p>Insights and advice from renowned experts.</p>
      </header>
      <Articles />
    </div>
  );
};

export default ArticlesPage;
