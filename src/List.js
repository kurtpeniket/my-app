import React from 'react';

const list = (props) => {
  return(
    <ol>
      {props.arr.map((e) => (<li>{e}</li>))}
    </ol>
  )
};

export default list;