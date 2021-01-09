import { Container,Row, Col } from 'react-bootstrap/';
import React from 'react';
import Products from './pages/cart/Cart'
import Cart from './pages/products/Products'

function App() {

  const style = {
    backgroundColor : 'grey',
    border : '1px solid white',
    marginTop : '50px',
    marginLeft : '50px',
    marginRight : '50px',
    marginLBottom : '50px'
  }

  return (
    <div style={style}>
      <Container>
        <Row>
          <Col>
            <Products />
          </Col>
          <Col>
            <Cart />
          </Col>
        </Row>
      </Container> 
    </div>
  );
}

export default App;