// src/config.js
const config = {
  apiBaseUrl: import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/persons'
};

export default config;