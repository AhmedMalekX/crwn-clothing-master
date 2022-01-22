import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import CollectionPage from '../collection/collection.component';

// Components
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      <Routes>
        <Route path='/' element={<CollectionOverview />} />
        <Route path=':collectionId' element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
