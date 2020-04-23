import React from 'react';
import { ImageContainer } from './style';

const Image = (props) => {
  return (
    <ImageContainer src={props.src}>
      {console.log(props.src)}
    </ImageContainer>
  );
};

export default Image;
