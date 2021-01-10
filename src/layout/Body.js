import { Container,Row, Col } from 'react-bootstrap/';
import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main'
import Cart from '../pages/cart/Cart'
import Products from '../pages/products/Products'

const Body = () => {

  const [bucket, setBucket] = React.useState([]);

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
      {/* 메인 */}
      <Route exact path='/'render={(props) =>
        <Main routeProps={props} />
      } />
      {/* 상품목록 */}
      <Route exact path='/Products'render={(props) =>
        <Products routeProps={props} bucket = {bucket} setBucket = {setBucket}/>
      } />
      {/* 장바구니 */}
      <Route exact path='/Cart'render={(props) =>
        <Cart routeProps={props} bucket = {bucket} setBucket = {setBucket}/>
      } />
    </div>
  );
}

export default Body;