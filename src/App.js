import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './layout/Body'
import Header from './layout/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Body/>
      </Router>
    </div>
  );
}

export default App;