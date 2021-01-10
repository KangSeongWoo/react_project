import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardDeck, ListGroup, Container, Row, Col, FormCheck} from 'react-bootstrap'

const Cart = ({ bucket, setBucket }) => {

  const style = {
    border : '1px solid white',
    marginTop : '50px',
    margin : '10px'
  }

  const [chosenList, setChosenList] = React.useState([]);
  const [payment, setPayment] = React.useState(0);
  const [chosenListForPay, setChosenListForPay] = React.useState([]);
  
  //상품 카드 리스트 만들기
  const MakeList = ({bucket}) =>{
    return (
      <Card style={{ width: '15rem' }} key={bucket.id} onClick = {() => chooseThis(bucket)}>
        <Card.Img variant="top" src={bucket.coverImage} />
        <Card.Body>
          <Card.Text>
            {bucket.title}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  //결재할 상품 선택하기
  const chooseThis = (bucket) => {
    setChosenListForPay([
      ...chosenListForPay,
      bucket
    ]);
    if(chosenList.filter(row => row.id === bucket.id).length === 1){
      // 장바구니에 중목된 상품이 들어가지 않도록
      alert("해당 상품은 이미 장바구니에 있습니다.");
    }else{
      alert("상품이 추가되었습니다.");
      setChosenList([
        ...chosenList,
        bucket
      ]);
    }
  }

  const removeList = (id) => {
    alert("상품이 제거되었습니다.");
    setChosenList([
      ...chosenList.filter(row => row.id !== id)
    ])
    setChosenListForPay([
      ...chosenListForPay.filter(row => row.id !== id)
    ]);
  }

  const addAmount = (chosenList) => {
    setChosenListForPay([
      ...chosenListForPay,
      chosenList
    ]);
  }

  const removeAmount = (id) => {
    if(chosenListForPay.filter(row => row.id === id).length === 1){
      alert("상품이 한개 이상은 있어야 합니다.");
      return;
    }

    for(let i = 0; i < chosenListForPay.length; i++){
      if(chosenListForPay[i].id === id){
        chosenListForPay.splice(i, 1)
        break;
      }
    }
    setChosenListForPay([
      ...chosenListForPay
    ]);
  }

  const ListForPay = ({chosenList}) => {
    return (
      <ListGroup.Item>
        <ListGroup horizontal className="my-2">
          <ListGroup.Item style={{width : '100%'}} onClick = {() => removeList(chosenList.id)}> {chosenList.title}</ListGroup.Item>
          <ListGroup.Item style={{display : 'flex'}}>
            <p onClick = {() => addAmount(chosenList, this)}>▲</p>{chosenListForPay.filter(row => row.id === chosenList.id).length}<p onClick = {() => removeAmount(chosenList.id)}>▼</p>
          </ListGroup.Item>
        </ListGroup> 
      </ListGroup.Item>
    )
  }

  const calculate = () => {
    
  }

  if(bucket.length == 0){
    return (
      <div>선택된 상품이 없습니다.</div>
    )
  }else{
    return (
      <>
        <CardDeck style = {{margin : '10px'}}>
          {
            bucket.map(bucket => (
              <MakeList bucket = {bucket}/>
            ))
          }
        </CardDeck>
        <ListGroup style={style}>
          {
            chosenList.map(chosenList => (
              <ListForPay chosenList = {chosenList}/>
            ))
          }
          <ListGroup.Item style={{textAlign : 'right'}}>
            <Container>
              <Row>
                <Col>
                  sdsdsdsd
                </Col>
                <Col>
                  결제예상금액 : {calculate()}
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        </ListGroup>
      </>
    );
  }
}

export default Cart;