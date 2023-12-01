import { applyMiddleware, createStore, compose } from "redux"; 
import rootReducer from "../Reducers";
import thunk from "redux-thunk";

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // Handle errors while saving state
  }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Load state from local storage
const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancer(applyMiddleware(thunk))
);

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
