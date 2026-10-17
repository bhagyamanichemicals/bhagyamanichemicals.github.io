import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Your global styles
import { BRAND_COLORS } from './constants/colors';

// Automatically turn your TypeScript constants into real CSS variables
const root = document.documentElement;
Object.entries(BRAND_COLORS).forEach(([key, value]) => {
  // Converts camelCase (bgPure) to custom CSS properties (--bgPure)
  root.style.setProperty(`--${key}`, value);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
