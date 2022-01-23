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
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
