import React from 'react';
import './App.css';
import 'swiper/css';
import * as dayjs from 'dayjs';
import Home from './views/home';
import rootReducer from "./store";
import {Provider} from "react-redux";
import {createStore} from "redux";
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dayjs/locale/zh-cn');

dayjs.locale('zh-cn');

const store = createStore(
  rootReducer,
);

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Home/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
