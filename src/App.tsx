import React from 'react';
import './App.css';
import HotNews from './components/HotNews';

function App() {
  return (
    <div>
        <div className="w-full px-5 py-10 md:w-9/12 md:m-auto md:px-0">
            <HotNews />
        </div>
    </div>
  );
}

export default App;
