import React from 'react';

const list = (props) => {
  return(
    <ol>
      <p>List here...</p>
      {props.arr.map((e) => (<li>{e}</li>))}
    </ol>
  )
};

export default list;