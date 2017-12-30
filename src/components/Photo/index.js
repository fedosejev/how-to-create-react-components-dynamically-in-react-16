import React from 'react';
import './index.css';

const Photo = function statelessFunctionComponentClass(props) {
  const source = `./photos/${props.source}`;

  return (
    <img src={source} className="photo" alt="Once upon a time in London" />
  );
};

export default Photo;