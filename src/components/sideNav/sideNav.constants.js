const APP_ROUTES = require('../../appRoutes');

module.exports = {
  SIDE_NAV_CONFIG: [
    {
      to: APP_ROUTES.HOME,
      name: 'Home',
      activeClassName: 'nav-item-active',
    },
    {
      to: APP_ROUTES.ADD_TO_DO,
      name: 'Add Todo',
      activeClassName: 'nav-item-active',
    },
    {
      to: APP_ROUTES.LIST_TO_DO,
      name: 'List Todos',
      activeClassName: 'nav-item-active',
    },
  ],
  APP_TITLE: 'Sample App',
};
