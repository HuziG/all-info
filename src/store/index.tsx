import {combineReducers} from 'redux';
import dragTagReducer from "./editTag.reducer";
import componentReducer from "./component.reducer";

const rootReducer = combineReducers({
  dragTagReducer,
  componentReducer
});

export default rootReducer
