import React from 'react';

import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

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
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {newItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    collection: selectCollection(collectionId.id.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
