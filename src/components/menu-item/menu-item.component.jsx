import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history(`${pathname}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  );
};
