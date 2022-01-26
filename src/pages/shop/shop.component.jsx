import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Pages
import CollectionPage from '../collection/collection.component';

// Components
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div className='shop-page'>
        <Routes>
          <Route path='/' element={<CollectionOverview />} />
          <Route path=':collectionId' element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
