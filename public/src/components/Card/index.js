import React from 'react';
import Image from '../Image';
import { CardContainer, Info, Name } from './style';

const Card = (props) => {
  return (
    <CardContainer onClick={props.handleClick}>
      <Image src={props.item.thumbnail_img} />
      <Info>
        <Name>{props.item.name}</Name>
        {Object.keys(props.item.rating).map((r) => (
          <div key={r}>
            {r}: {props.item.rating[r]} điểm
          </div>
        ))}
      </Info>
    </CardContainer>
  );
};

export default Card;
