import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
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
    <AmplifySignOut className="signout-button" />
  </header>
);

export default Header;
