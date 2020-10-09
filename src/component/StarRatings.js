import React, { Component } from 'react'

import grey from '../assets/vector/star-grey.svg'
import yellow from '../assets/vector/star-yellow.svg'

export default class StarRatings extends Component {
  render() {
    return (
      <div>
        {[...Array(5)].map((_o,i)=>{
          if(i+1 <= Math.round(this.props.number)){
            return (<img src={yellow} alt='y' />)
          }else{
            console.log('grey')
            return (<img src={grey} alt='g' />)
          }
        })}
      </div>
    )
  }
}
