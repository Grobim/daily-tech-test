import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

function BasicExample() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default BasicExample;
