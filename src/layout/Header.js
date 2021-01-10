import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap/';

const Header = () => {

  const style = {
    backgroundColor : 'white',
    border : '1px solid white',
    marginTop : '10px',
    marginLeft : '50px',
    marginRight : '50px',
    marginLBottom : '10px'
  }

  return (
    <div style={style}>
      여기는 헤더 입니다.
      <Button>
        <Link to="/Products">
          상품목록
        </Link>
      </Button>
      <Button>
        <Link to="/Cart">
          장바구니
        </Link>
      </Button>
    </div>
  );
}

export default Header;