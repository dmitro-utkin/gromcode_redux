import { SET_USER, REMOVE_USER } from "./user.actions";
import { initialState } from "./store";

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: state.user.concat(action.payload.userData),
      };
    }
    case REMOVE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
