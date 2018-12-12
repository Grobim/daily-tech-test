import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes';

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Routes />
      </div>
    </Router>
  );
}

export default BasicExample;
