import TODO_ACTIONS from '../containers/todo/todo.actions.constants';
import DASHBOARD_ACTIONS from '../containers/Dashboard/dashboard.actions.constants';

const ACTIONS = {
  TODO: {
    ...TODO_ACTIONS,
  },
  DASHBOARD: {
    ...DASHBOARD_ACTIONS,
  },
};

export default ACTIONS;
