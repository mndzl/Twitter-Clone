import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/CSS/index.css';
import Homepage from './Components/Homepage';
import Compose from './Components/Compose';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="compose" element={<Compose />} />
        </Routes>
    </BrowserRouter>
);
