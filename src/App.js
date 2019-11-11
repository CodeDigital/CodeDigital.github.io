import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Body from './components/body/Body';

function App() {
  return (
    <Router basename='/'>
      <Header></Header>
      <Body></Body>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
