import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/tutorial">How it works</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">Start for free</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
