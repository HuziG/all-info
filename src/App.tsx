import React from 'react';
import './App.css';
import HotNews from './components/HotNews';
import Index from "./components/TaoNvLang/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <div className="w-full px-5 py-10 overflow-hidden md:w-9/12 md:m-auto md:px-0">
          <HotNews />
          <Index />
        </div>
      <Footer />
    </div>
  );
}

export default App;
