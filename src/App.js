import { Container,Row, Col } from 'react-bootstrap/';
import React from 'react';
import Area from './Area'

const App = () => {
  const style = {
    backgroundColor : 'black',
    hieght : '20000px'
  }

  return (
    <div style={style}>
     <Area />
    </div>
  );
}

export default App;