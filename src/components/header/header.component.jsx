import React from 'react';
import { Link } from 'react-router-dom';

// Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Styles
import './header.styles.scss';

export const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
    </div>
  </div>
);
