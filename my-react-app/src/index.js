import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root'); // Ensure this matches the ID in index.html
const root = createRoot(container);
root.render(<App />);

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    console.log(container); // Check if the element is found
    const root = createRoot(container);
    root.render(<App />);
});
