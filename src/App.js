import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MeetProvider } from './context/MeetContext';
import MeetPage from './pages/MeetPage';
import StartupPage from './pages/StartupPage';
import ThankYou from './pages/ThankYouPage';

import './styles/custom.css';

function App() {
  return (
    <MeetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartupPage />} />
          <Route path="/meet/:id" element={<MeetPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </MeetProvider>
  );
}

export default App;
