import React, { Component } from 'react'
import {Card as CardOriginal, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import Ratings from '../component/StarRatings'
import numeral from 'numeral'

import placeholder from '../assets/image/placeholder.png'

export default class Card extends Component {
  render() {
    return (
      <CardOriginal className='my-2'>
        <CardImg top width="100%" src={this.props.images?this.props.images:placeholder} alt='item' />
        <CardBody>
          <CardTitle className='h6'>{this.props.name}</CardTitle>
          <CardSubtitle className='h5 text-danger'>Rp.{numeral(this.props.price).format(0,0).toString().replace(',','.')},-</CardSubtitle>
          <CardText className='text-muted h6'>{this.props.storeName}</CardText>
          <Ratings number={this.props.ratings} />
        </CardBody>
      </CardOriginal>
    )
  }
}
