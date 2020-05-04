import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useRouteMatch } from 'react-router-dom';

import {
  DetailPageContainer,
  InfoContainer,
  GeneralContainer,
  ImageContainer,
} from './style';
import { GET_ITEM } from '../../queries';
import { convertUrlPath, groupBy } from '../../ultils/';

const DetailPage = () => {
  const { itemId } = useParams();
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: {
      type: convertUrlPath(match.path.split('/')[1]),
      id: itemId.split('-')[0] * 1,
    },
  });
  if (loading)
    return <div>Temp file for `Detail Page Error Loading`</div>;
  if (error) return <div> Temp file for `Detail Page Error`</div>;

  const item = data.item;
  console.log(data);
  const groupProps = [
    ...groupBy(item.properties, (pet) => pet.category),
  ];

  return (
    <DetailPageContainer>
      <InfoContainer>
        <ImageContainer>
          <img
            src={item.large_img}
            alt={`Hình của sản phẩm${item.name}`}
          ></img>
        </ImageContainer>
        <GeneralContainer>
          <h2>{item.name}</h2>
          {Object.keys(item.rating).map((r) => (
            <div key={r}>
              {r}: {item.rating[r]} điểm
            </div>
          ))}
        </GeneralContainer>
      </InfoContainer>
      {groupProps.map((props) => (
        <div key={props[0]}>
          <h1>{props[0]}</h1>
          <div>
            {props[1].map((prop) => (
              <div key={prop.name}>
                <strong>{prop.display_name}</strong>: {prop.value}
                {prop.unit}
              </div>
            ))}
          </div>
        </div>
      ))}
    </DetailPageContainer>
  );
};

export default DetailPage;
