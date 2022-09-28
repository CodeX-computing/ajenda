import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NotFound404 from './components/NotFound404';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
