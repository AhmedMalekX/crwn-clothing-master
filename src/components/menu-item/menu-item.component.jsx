import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useNavigate();
  const { pathname } = useLocation();

  return (
    <MenuItemContainer
      size={size}
      onClick={() => history(`${pathname}${linkUrl}`)}>
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};
