import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import UploadPage from './pages/UploadPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/app" element={<UploadPage />} />
    </Routes>
  );
}
