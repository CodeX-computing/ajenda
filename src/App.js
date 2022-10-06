import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Home from './components/pages/Home';
import How from './components/pages/How';
import Navigation from './components/Navigation';
import NotFound404 from './components/pages/NotFound404';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
// import Ajenda from './components/Ajenda';
import Todo from './components/inner-components/Todo';
import Goals from './components/inner-components/Goals';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* <Route path="/app" element={<Ajenda />} /> */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/goals" element={<Goals />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/how" element={<How />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
