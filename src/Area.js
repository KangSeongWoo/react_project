import { Container,Row, Col } from 'react-bootstrap/';
import React from 'react';
import Cart from './pages/cart/Cart'
import Products from './pages/products/Products'

const Area = () => {

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

export default Area;