import React from 'react'
import { Row, Col, Container } from 'reactstrap'
// import {useSelector} from 'react-redux'
// import {Link} from 'react-router-dom'

// import Ratings from '../component/StarRatings'
import Card from '../component/Card'

export default function About(props){
  // const {count} = useSelector(state => state.counter)
  const data = [
    {
      images: 'https://ecs7-p.tokopedia.net/img/cache/200-square/attachment/2020/10/8/32520341/32520341_42733b82-8b39-4a29-bb86-6338ba1352f7.jpg.webp',
      name: 'Kabel Data Baseus',
      price: 56000,
      storeName: 'erafone',
      ratings: 4.5
    },{
      images: 'https://ecs7-p.tokopedia.net/img/cache/200-square/attachment/2020/10/8/32520341/32520341_94812d00-7c42-4ca4-8703-2c0e4e600469.jpg.webp',
      name: 'Headset Logitech',
      price: 60000,
      storeName: 'erafone',
      ratings: 4.5
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 4
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 3
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 4.5
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 1
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 4.5
    },{
      name: 'Item 1',
      price: 100000,
      storeName: 'erafone',
      ratings: 0
    },
  ]
  return (
    <Container fluid>
      <Row>
        {data.map((item, i)=>{
          return(
            <Col xs={6} sm={4} md={3} lg={{size: 2, offset: ((i+5)%5===0?1:0)}}>
              <Card images={item.images} name={item.name} price={item.price} storeName={item.storeName} ratings={item.ratings}/>
            </Col>
          )
        })}
      </Row>
      {/* <Ratings number={4} /> */}
      {/* {count}
      <Link className='h5' to='/counter'>Go to Counter</Link> */}
    </Container>
  )
}