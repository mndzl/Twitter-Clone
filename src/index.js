import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Components/CSS/index.css';
import Homepage from './Components/Homepage';
import Compose from './Components/Compose';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="compose" element={<Compose />} />
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                } />
            </Routes>
        </BrowserRouter>
    </ApiProvider>
);
