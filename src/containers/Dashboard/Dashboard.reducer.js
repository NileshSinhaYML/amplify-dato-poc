import ACTIONS from '../../api-config/actions.constants';

const initialState = {
  posts: [],
  hasDataLoaded: false,
};

const todo = (state = initialState, action) => {
  let tempState = { ...state };
  switch (action.type) {
    case ACTIONS.DASHBOARD.GET_POSTS_SUCCESS:
      tempState = {
        ...tempState,
        posts: action.data,
        hasDataLoaded: true,
      };
      return tempState;
    case ACTIONS.DASHBOARD.RESET_DATA_LOADED_STATE:
      tempState = {
        ...tempState,
        hasDataLoaded: false,
        posts: [],
      };
      return tempState;
    default:
      return tempState;
  }
};

export default todo;
