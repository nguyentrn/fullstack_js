import React from 'react';
import { ImageContainer } from './style';

const Image = (props) => {
  return <ImageContainer src={props.src}></ImageContainer>;
};

export default Image;
