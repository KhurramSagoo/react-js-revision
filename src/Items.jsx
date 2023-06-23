import React from 'react'
import './item.css'

const Items = (props) => {
    // console.log(props)
  return (
    <div className='container'>
        
        <p>{props.title}</p>
        <img src={props.image}/> 
        <p>{props.description}</p>
        <p>{props.category}</p>
        {/* <p>{props.rating}</p> */}
        <p>Rs {props.price}</p>


    </div>
  )
}

export default Items