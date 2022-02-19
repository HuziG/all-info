import React from 'react';
import './App.css';
import "swiper/css";
import HotNews from './components/HotNews';
import Footer from "./components/Footer";
import MaoYan from "./components/MaoYan";
import WangYiYun from "./components/WangYiYun";
import MeiZi from "./components/MeiZi";
import BilibiliCarton from "./components/BilibiliCarton";

import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import * as dayjs from 'dayjs'
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

function App() {

  return (
    <div>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 25, y: 25}}
        grid={[25, 25]}
        scale={1}
      >
       <div><HotNews /></div>
      </Draggable>

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 25, y: 25}}
        grid={[25, 25]}
        scale={1}
      >
       <div><WangYiYun /></div>
      </Draggable>

        {/*<div className="lg:float-left lg:w-5/12">*/}
        {/*  <HotNews />*/}
        {/*  <div className={'w-10'} />*/}
        {/*  <WangYiYun />*/}
        {/*<MaoYan />*/}
          {/*<MeiZi />*/}
        {/*</div>*/}
        {/*<div className="lg:ml-5 lg:float-left lg:w-6/12">*/}
          {/*<MeiZi />*/}
          {/*<WangYiYun />*/}
        {/*</div>*/}
      {/*</div>*/}

      {/*<div className="flex flex-col px-5 pt-5 md:w-9/12 md:m-auto md:px-0">*/}
      {/*  <BilibiliCarton />*/}

      {/*<div className={'h-40'} />*/}

      {/*<Footer />*/}
    </div>
  );
}

export default App;
