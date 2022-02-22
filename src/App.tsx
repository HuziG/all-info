import React from 'react';
import './App.css';
import 'swiper/css';

import * as dayjs from 'dayjs';
import Home from './views/home';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dayjs/locale/zh-cn');

dayjs.locale('zh-cn');

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
