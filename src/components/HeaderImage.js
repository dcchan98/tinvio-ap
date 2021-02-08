import React from 'react'



export default function HeaderImage(props) {
  return (
    <div>
      <header className= "row" >
        <img src={props.imageURL} className ="headerImage col-sm-12 " alt="Responsive image"/>
      </header>
    </div>
  )
}
