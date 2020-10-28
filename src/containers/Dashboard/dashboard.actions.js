import ACTIONS from '../../api-config/actions.constants';

/**
 * @description
 * Action to update the reducer state
 * @param {object} response the response
 * @returns {object} the list posts success action
 */
const listAllPosts = (response) => ({
  type: ACTIONS.DASHBOARD.GET_POSTS_SUCCESS,
  data: response,
});

/**
 * @description
 * Action to update the reducer data loaded state
 * @returns {object} the update data loaded state action
 */
const resetDataLoadedState = () => ({
  type: ACTIONS.DASHBOARD.RESET_DATA_LOADED_STATE,
});

export { listAllPosts, resetDataLoadedState };
