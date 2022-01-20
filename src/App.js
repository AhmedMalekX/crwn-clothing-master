import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { Header } from './components/header/header.component';

// Pages
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/signin' element={<SignInAndSignUpPage />} />
    </Routes>
  </div>
);

export default App;
