import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../Actiontypes/user";

const initialState = {
  userId: null,  // Include userId in the initial state
  user: {},
  loadUser: false,
  errors: null,
  isAuth: false,
  newUser: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, load: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, newUser: payload.user, isAuth: true, userId: payload.user._id }; // Assuming userId is in payload.user
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.user, loadUser: false, isAuth: true, userId: payload.user._id }; // Assuming userId is in payload.user
    case CURRENT_USER:
      return { ...state, user: payload, loadUser: false, isAuth: true, userId: payload}; // Assuming userId is in payload
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        userId: null,  // Reset userId to null when logging out
        user: {},
        loadUser: false,
        errors: null,
        isAuth: false,
        newUser: {},
      };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    default:
      return state;
  }
};

export default userReducer;
