import React, { useState } from 'react';

const UseState = () => {
  const [state, setState] = useState(0)
  console.log(state)
    const handleClick=()=>{
        setState(state+1)
    }
  return (
    <>
    <p>{state}</p>
    <button onClick={handleClick}>+</button>
    </>
  )
}

export default UseState