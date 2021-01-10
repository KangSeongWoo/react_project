import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Pagination, Button, CardDeck } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

import { productItems } from '../../data/productItems'

const Products = ({ bucket, setBucket }) => {

  //페이지 당 정렬 갯수
  const numByPage = 5;

  // 상품 score 내림차순으로 정렬
  productItems.sort(function(a, b) {
    return b["score"] - a["score"];
  });
  
  const [list, setList] = React.useState(productItems.slice(0,5));
  
  // Pagenation
  let items = [];
  for (let number = 1; number <= Math.ceil(productItems.length/5); number++) {
    items.push(
      <Pagination.Item key={number}  onClick={() => nextPage(number,setList)}>
        {number}
      </Pagination.Item>,
    );
  }

  //상품 카드 리스트 만들기
  const MakeList = ({productItem}) =>{
    return (
      <Card style={{ width: '15rem' }} key={productItem.id}>
        <Card.Img variant="top" src={productItem.coverImage} />
        <Card.Body>
          <Card.Text>
            {productItem.title}
          </Card.Text>
          <Button onClick={() => addItem(productItem)}>+ 담기</Button>
          <Button onClick={() => removeItem(productItem.id)}>- 빼기</Button>
        </Card.Body>
      </Card>
    )
  }
  
  //상품 추가
  const addItem = (productItem) => {
    if(bucket.length >= 3){
      // 장바구니 갯수 제한
      alert("장바구니에는 3가지 상품 이상으로 담을 수 없습니다.");
    }else if(bucket.filter(row => row.id === productItem.id).length === 1){
      // 장바구니에 중목된 상품이 들어가지 않도록
      alert("해당 상품은 이미 장바구니에 있습니다.");
    }else{
      alert("상품이 추가되었습니다.");
      setBucket([
        ...bucket,
        productItem
      ]);
    }
  }
  
  // 상품빼기
  const removeItem = (id) => {
    if(bucket.filter(row => row.id === id).length === 0){
      // 장바구니에 해당 상품이 없는 경우
      alert("해당 상품은 장바구니에 없습니다.");
    }else{
      alert("상품이 제거되었습니다.");
      setBucket([
        ...bucket.filter(row => row.id !== id)
      ])
    }
  }

  //다음 페이지 이동
  const nextPage = (number,setList) => {
    setList(productItems.slice((number-1)*numByPage,(number-1)*numByPage + numByPage))
  };

  return (
    <div style = {{margin : '10px'}}>
      <CardDeck>
      {
        list.map(productItem => (
          <MakeList productItem = {productItem}/>
        ))
      }
      </CardDeck>
      <Pagination  style = {{marginTop : '20px'}}>{items}</Pagination>
    </div>
  );
}

export default Products;