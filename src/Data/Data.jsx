import datas from './Datas.json'
import React, { useState } from 'react';

const MyData = () => {
  const [data, setData] = useState(datas);

  const handleRemove = (itemId) => {
    setData(data.filter((item) => item.id !== itemId));
  };

  const handleUpdate = (itemId) => {
    setData(data.map((item) => {
      if (item.id === itemId) {
        return { ...item, name: "newName" };
      } else {
        return item;
      }
    }));
  };

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}
            <br />
            <button onClick={() => handleRemove(item.id)}>Remove object {item.id}</button>
            <button onClick={() => handleUpdate(item.id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyData;
