import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/e-commerce/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/e-commerce/shop">
        SHOP
      </Link>
      <Link className="option" to="/e-commerce/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/e-commerce/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
