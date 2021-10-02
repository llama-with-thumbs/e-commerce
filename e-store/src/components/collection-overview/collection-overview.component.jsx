import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
