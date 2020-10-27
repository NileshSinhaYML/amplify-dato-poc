const APP_ROUTES = require('../../appRoutes');

module.exports = {
  SIDE_NAV_CONFIG: [
    {
      to: APP_ROUTES.DASHBOARD,
      name: 'Dashboard',
      activeClassName: 'nav-item-active',
    },
  ],
  APP_TITLE: 'Amplify POC',
};
