import React from 'react';

// redux
import { connect } from 'react-redux';

// reselect
import { createStructuredSelector } from 'reselect';

// selector
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

// Components
import { CollectionPreview } from '../collection-preview/collection-preview.component';

// styles
import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
