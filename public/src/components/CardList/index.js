import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardListContainer } from './style';
import Card from '../Card';
// <Link to={`${match.path}/${item.url}`}>

const CardList = (props) => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleClick = (url) => {
    console.log(url);
    history.push(`${match.path}/${url}`);
  };

  return (
    <CardListContainer>
      {props.items.map((item) => (
        <Card
          key={item.id}
          item={item}
          handleClick={() => handleClick(`${item.id}-${item.url}`)}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
