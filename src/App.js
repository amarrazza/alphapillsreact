import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Calls from './components/Calls';
import Pills from './components/Pills';
import Links from './components/Links';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
          <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery/' element={<Home />} />
            <Route path='/gallery/:page' element={<Gallery />} />
            <Route path='/calls' element={<Calls />} />
            <Route path='/pills' element={<Pills />} />
            <Route path='/links' element={<Links />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
