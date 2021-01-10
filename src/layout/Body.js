import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
      {/* http://localhost:3001/로 진입시 바로 Products 로 이동 */}
      <Redirect
        exact
        from="/"
        to="/Products"
      />
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