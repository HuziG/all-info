import React from 'react';
import './App.css';
import "swiper/css";
import HotNews from './components/HotNews';
import Footer from "./components/Footer";
import MaoYan from "./components/MaoYan";
import WangYiYun from "./components/WangYiYun";
import MeiZi from "./components/MeiZi";
import BilibiliCarton from "./components/BilibiliCarton";

function App() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full px-5 pt-10 overflow-hidden md:w-9/12 md:m-auto md:px-0">
        <div className="lg:float-left lg:w-5/12">
          <HotNews />
          <MaoYan />
        </div>
        <div className="lg:ml-5 lg:float-left lg:w-6/12">
          <MeiZi />
          <WangYiYun />
        </div>
      </div>

      <div className="flex flex-col px-5 pt-5 md:w-9/12 md:m-auto md:px-0">
        <BilibiliCarton />
      </div>

      <div className={'h-40'} />

      <Footer />
    </div>
  );
}

export default App;
