import React, {useEffect} from 'react';
import { Card, Button, CardDeck, ListGroup, Container, Row, Col, FormCheck} from 'react-bootstrap'

const Cart = ({ bucket, setBucket }) => {

  const style = {
    border : '1px solid white',
    marginTop : '50px',
    margin : '10px'
  }

  const [chosenList, setChosenList] = React.useState([]);                   //구매 선택된 리스트 중복X
  const [chosenListForPay, setChosenListForPay] = React.useState([]);       //구매 선택됭 리스트 중복O
  const [totalAmount, setTotalAmount] = React.useState(0);                  //총액
  const [discountAmountCoupon, setDiscountAmountCoupon] = React.useState({  //정액 할일 관련 값
    discountAmountYn : false,
    discountAmount : 0,
  })
  const [discountRateCoupon, setDiscountRateCoupon] = React.useState({      //비율 할일 관련 값   
    discountRateYn : false,
    discountRate : 0
  })
 
  // 쿠폰 적용 관련, 수량 변경시
  useEffect(() => {
    let total = 0;
    let isCoupon = false;

    for(let i = 0; i<chosenListForPay.length; i++){
      if(chosenListForPay.availableCoupon != false){
        isCoupon = true;
      }
      total += chosenListForPay[i].price;
    }

    if(discountRateCoupon.discountRateYn != false){
      total *= discountRateCoupon.discountRate/100;
    }else if(discountAmountCoupon.discountAmountYn != false){
      total -= discountAmountCoupon.discountAmount;
    }

    if(total < 0){
      total = 0
    }

    setTotalAmount(total);
	},[chosenListForPay, discountAmountCoupon, discountRateCoupon])

  //상품 카드 리스트 만들기
  const MakeList = ({bucket}) =>{
    return (
      <div style={{width : '20%', height:'20%'}}>
        <Card style={{ width: '18rem' }} key={bucket.id} onClick = {() => chooseThis(bucket)}>
          <Card.Img variant="top" src={bucket.coverImage} />
          <Card.Body>
            <Card.Text>
              {bucket.title}
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
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

  //구매상품 삭제
  const removeList = (id) => {
    alert("상품이 제거되었습니다.");
    setChosenList([
      ...chosenList.filter(row => row.id !== id)
    ])
    setChosenListForPay([
      ...chosenListForPay.filter(row => row.id !== id)
    ]);
  }

  // 특정 상품 구매 수량 +
  const addAmount = (chosenList) => {
    setChosenListForPay([
      ...chosenListForPay,
      chosenList
    ]);
  }

  // 특정 상품 구매 수량 -
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

  //구매로 선택된 리스트 생성
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
  
  //쿠폰 관련 체크 박스 
  const checkBoxChange = (name, num,flag) =>{
    if(flag){
      if(name == "discountAmount"){
        setDiscountAmountCoupon({
          discountAmountYn : false,
          discountAmount : num,
        })
      }else{
        setDiscountRateCoupon({
          discountRateYn : false,
          discountRate : num,
        })
      }
    }else{
      if(name == "discountAmount"){
        setDiscountAmountCoupon({
          discountAmountYn : true,
          discountAmount : num,
        })
        setDiscountRateCoupon({
          discountRateYn : false,
          discountRate : num,
        })
      }else{
        setDiscountRateCoupon({
          discountRateYn : true,
          discountRate : num,
        })
        setDiscountAmountCoupon({
          discountAmountYn : false,
          discountAmount : num,
        })
      }
    }
  }

  if(bucket.length == 0){
    return (
      <ListGroup>
        <ListGroup.Item>선택한 상품이 없습니다.</ListGroup.Item>
      </ListGroup>
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
                  <Row>
                    <FormCheck label="정액 할인" onChange={() => checkBoxChange('discountAmount', 5000, discountAmountCoupon.discountAmountYn)} checked = {discountAmountCoupon.discountAmountYn}></FormCheck>
                    <FormCheck label="비율 할인" onChange={() => checkBoxChange('discountRate', 50, discountRateCoupon.discountRateYn)} checked = {discountRateCoupon.discountRateYn}></FormCheck>
                  </Row>
                </Col>
                <Col>
                  결제예상금액 : {parseInt(totalAmount)}
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