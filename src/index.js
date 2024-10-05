import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';  // Keep this if you have global styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap integration
import './fontAwesome';
// Add these imports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

// Optional: Performance measuring
reportWebVitals();
