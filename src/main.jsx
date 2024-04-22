import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <App className="bg-[#080a15f5]" />,
);
