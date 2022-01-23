import React from 'react';

import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

let collectionId = {
  id: '',
};

const CollectionPage = ({ collection }) => {
  let param = useParams();
  collectionId.id = param;
  const newCollection = { ...collection };

  const { title, items } = newCollection;
  const newItems = [];

  for (let item in items) {
    newItems.push(items[item]);
  }

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {newItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = state => {
  return {
    collection: selectCollection(collectionId.id.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
