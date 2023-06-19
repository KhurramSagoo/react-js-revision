import React from 'react'
import './book.css'

const Book = (props) => {
    console.log(props)
  return (
    <div>
        <img src={props.image}/> 
        
        <p>{props.title}</p>
        <p>{props.publisher}</p>
        <p>{props.price}</p>


    </div>
  )
}

export default Book