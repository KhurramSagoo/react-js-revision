import React from 'react'
import './books.json'
import Book from './Book'

const B= [
      {
        "image":"https://m.media-amazon.com/images/I/71oZ45OrLjL._AC_UL600_FMwebp_QL65_.jpg",
        "title": "Book 1",
        "publisher": "Publisher A",
        "price": 19.99
      },
      {
        "image":"https://m.media-amazon.com/images/I/71QY16aY8QL._AC_UL600_FMwebp_QL65_.jpg",
        "title": "Book 2",
        "publisher": "Publisher B",
        "price": 12.99
      },
      {
        "image":"https://m.media-amazon.com/images/I/71TR9X1y-uL._AC_UL600_FMwebp_QL65_.jpg",
        "title": "Book 3",
        "publisher": "Publisher C",
        "price": 24.99
      }
    ]

const BookList = () => {


  
  return (

    <>
    {B.map((ele)=>{
        return <Book
        image={ele.image}
        title={ele.title}
        publisher={ele.publisher}
        price={ele.price}

        />

    })}
    
    
    </>
  )
}

export default BookList;