import React from 'react';
import { ImageContainer } from './style';

const Image = (props) => {
  return (
    <ImageContainer src={props.src}>
      {/* <img src={props.src} alt={props.src}></img> */}
    </ImageContainer>
  );
};

export default Image;
