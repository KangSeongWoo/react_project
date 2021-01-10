import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'
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
      <Container>
        <Row>
          <Col>
            <h1>
              <Badge variant="secondary">클래스 101 프론트엔트 개발자 과제</Badge>
            </h1>
          </Col>
          <Col>
            <Row style={{margin : '10px'}}>
              <Button variant="outline-primary">
                <Link to="/Products">
                  상품목록
                </Link>
              </Button>
              <Button variant="outline-primary">
                <Link to="/Cart">
                  장바구니
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;