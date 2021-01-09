import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Pagination } from 'react-bootstrap'

import { productItems } from '../../data/productItems'

const MakeList = ({productItem, number}) =>{
  return (
    <Card style={{ width: '15rem' }} key={productItem.id}>
      <Card.Img variant="top" src={productItem.coverImage} />
      <Card.Body>
        <Card.Text>
          {productItem.title}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const nextPage = (number,setList) => {
  //debugger;
  setList(productItems.slice((number-1)*5,(number-1)*5 + 5))
};

const Products = () => {
  productItems.sort(function(a, b) {
    return b["score"] - a["score"];
  });
  
  const [list, setList] = React.useState(productItems.slice(0,5));
  
  let items = [];
  for (let number = 1; number <= Math.ceil(productItems.length/5); number++) {
    items.push(
      <Pagination.Item key={number}  onClick={() => nextPage(number,setList)}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      여기는 상품목록
      {
        list.map(productItem => (
          <MakeList productItem = {productItem} number = {5}/>
        ))
      }
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}

export default Products;