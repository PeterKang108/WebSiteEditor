import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from "./pages/Homepage";
import SamplePage1 from "./pages/sample1";
import SamplePage2 from "./pages/sample2";

const App: React.FC = () => {


  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* ShowCase Pages */}
        <Route path='/' element={<Homepage />}/>
        <Route path='/sample1' element={<SamplePage1 />}/>
        <Route path='/sample2' element={<SamplePage2 />}/>

        {/* Admin Pages */}
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
