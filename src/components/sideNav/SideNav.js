import React from 'react';
import { NavLink } from 'react-router-dom';
import { isDataExists } from '../../utils/utils';
import NAV_CONSTANTS from './sideNav.constants';
import './sideNav.scss';

/**
 * @description
 * Function to render the side nav panel
 * @returns {node} the side nav panel
 */
const SideNav = () => {
  /**
   * @description
   * Function to render the nav list
   * @returns {node} the node list
   */
  const renderNavList = () =>
    NAV_CONSTANTS.SIDE_NAV_CONFIG.map(({ to, name, activeClassName }, index) => (
      <li key={index} className="side-nav-list-item">
        <NavLink to={to} activeClassName={activeClassName}>
          {name}
        </NavLink>
      </li>
    ));
  return (
    <nav className="side-nav-container">
      <p className="app-title-section">
        <span className="app-title">{NAV_CONSTANTS.APP_TITLE}</span>
      </p>
      <ul className="side-nav-list">
        {isDataExists(NAV_CONSTANTS.SIDE_NAV_CONFIG) && renderNavList()}
      </ul>
    </nav>
  );
};

export default SideNav;
