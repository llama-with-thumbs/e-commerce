import React from 'react';
// import SHOP_DATA from '../../redux/shop/shop.data';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({collections}) => {
//   const { collections } = this.state;
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
