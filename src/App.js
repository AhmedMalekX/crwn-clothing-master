import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
