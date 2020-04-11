import { createStore, combineReducers } from "redux";
import memberReducer from "../reducers/membersReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      members: memberReducer,
    })
  );

  return store;
};

export default configStore;
