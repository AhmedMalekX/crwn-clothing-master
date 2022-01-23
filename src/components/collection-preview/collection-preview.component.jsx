import React from 'react';

// Styles
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

// Components
import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((_, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
