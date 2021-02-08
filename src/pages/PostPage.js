import React, { Component } from 'react'

import HeaderImage from '../components/HeaderImage'

const imageURL = "images/image.jpg"

export default class PostPage extends Component {
  render() {
    return (
      <div>
      <HeaderImage imageURL = {imageURL}/>
      
        
      </div>
    )
  }
}
