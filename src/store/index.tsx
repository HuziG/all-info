import {createStore} from 'redux';
import reducer from "./dragTag.store";

export const componentStore = createStore(reducer);
