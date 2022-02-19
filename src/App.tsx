import React from 'react';
import './App.css';
import "swiper/css";


import * as dayjs from 'dayjs'
import Home from "./views/home";
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

function App() {

  return (
    <div>
      <Home />

      {/*<Draggable*/}
      {/*  axis="both"*/}
      {/*  handle=".handle"*/}
      {/*  defaultPosition={{x: 25, y: 25}}*/}
      {/*  grid={[25, 25]}*/}
      {/*  scale={1}*/}
      {/*>*/}
      {/* <div><WangYiYun /></div>*/}
      {/*</Draggable>*/}

      {/*<Footer />*/}
    </div>
  );
}

export default App;
