import React from 'react';
import './header.scss';
import SIDE_NAV_CONSTANTS from '../sideNav/sideNav.constants';

/**
 * @description
 * Function to render the header component
 * @returns {node} the header component
 */
const Header = () => (
  <header className="header-container">
    <h1 className="app-title">{SIDE_NAV_CONSTANTS.APP_TITLE}</h1>
  </header>
);

export default Header;
