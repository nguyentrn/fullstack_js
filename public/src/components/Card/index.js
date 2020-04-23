import React from 'react';
import Image from '../Image';
import { CardContainer } from './style';

const Card = (props) => {
  return (
    <CardContainer>
      <div>
        {props.cpu.name}
        {props.cpu.id}
      </div>
      <Image src={props.cpu.img_url[1]} />
    </CardContainer>
  );
};

export default Card;
