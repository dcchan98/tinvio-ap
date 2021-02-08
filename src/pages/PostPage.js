import React, { Component } from 'react'

import HeaderImage from '../components/HeaderImage'
import IconText from '../components/IconText'

const imageURL = "images/image.jpg"
const phoneURL = 'images/phone.png'
const categoryURL = 'images/category.png'
const shopURL = 'images/shop.png'


export default class PostPage extends Component {
  render() {
    return (
      <div>
      <HeaderImage imageURL = {imageURL}/>

      <br></br>
      <div className="container">
      <h1>Leanne Graham</h1>
      <br/>
      <IconText iconsURL = {phoneURL} text = {'12345'}/>
      <br/>
      <IconText iconsURL = {categoryURL} text = {'Harness . Real Time . Market'}/>
      <br/>
      <IconText iconsURL = {shopURL} text = {'Kulas Light, Apt. 556 , Singapore 123456'}/>
      <br/>
      <br></br>
      </div>
     

      
        
      </div>
    )
  }
}
