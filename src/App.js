import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralRoutes from './helpers/GeneralRoutes';
import ProtectedRoutes from './helpers/ProtectedRoutes';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Home from './components/pages/Home';
import How from './components/pages/How';
// import Navigation from './components/Navigation';
import NotFound404 from './components/pages/NotFound404';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Todo from './components/app/Todo';
import Goals from './components/app/Goals';

function App() {
  return (
    <BrowserRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route element={<GeneralRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/how" element={<How />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/app/todo" element={<Todo />} />
          <Route exact path="/app/goals" element={<Goals />} />
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
