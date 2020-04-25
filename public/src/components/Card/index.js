import React from 'react';
import Image from '../Image';
import { CardContainer } from './style';

const Card = (props) => {
  return (
    <CardContainer onClick={props.handleClick}>
      <div>
        {props.item.id}
        {props.item.name}
      </div>
      <Image src={props.item.thumbnail_img} />
    </CardContainer>
  );
};

export default Card;
