import React from 'react'

import Card from "../components/Card";

export default function Post(props) {
  return (
    <div>
    <br></br>
      {props.currentPosts.map(post=><Card title={post.title} body={post.body} />)}	
    </div>
  )
}
