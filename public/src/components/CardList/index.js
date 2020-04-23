import React from 'react';
import { CardListContainer } from './style';
import Card from '../Card';

const CardList = (props) => {
  return (
    <CardListContainer>
      {props.cpus.map((cpu) => (
        <Card cpu={cpu} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
