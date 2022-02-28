import {combineReducers} from 'redux';
import appReducer from "./app.reducer";
import componentReducer from "./component.reducer";

const rootReducer = combineReducers({
  appReducer,
  componentReducer
});

export default rootReducer
