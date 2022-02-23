import React from 'react';
import './App.css';
import 'swiper/css';
import * as dayjs from 'dayjs';
import {StoreContext} from "redux-react-hook";
import Home from './views/home';
import {componentStore} from "./store";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dayjs/locale/zh-cn');

dayjs.locale('zh-cn');

function App() {
  return (
    <React.Fragment>
      <StoreContext.Provider value={componentStore}>
        <Home/>
      </StoreContext.Provider>
    </React.Fragment>
  );
}

export default App;
