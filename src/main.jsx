import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PhotographyAI from './PhotographyAI.jsx';
import './styles.css';
const isPhotoPage = new URLSearchParams(window.location.search).get('servicio') === 'fotografia-con-ia';
createRoot(document.getElementById('root')).render(<React.StrictMode>{isPhotoPage ? <PhotographyAI/> : <App/>}</React.StrictMode>);
