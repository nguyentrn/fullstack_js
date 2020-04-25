import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useRouteMatch } from 'react-router-dom';
import { DetailPageContainer } from './style';
import { GET_ITEM } from '../../queries';
import Image from '../../components/Image';

const DetailPage = () => {
  const { itemId } = useParams();
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: {
      type: match.path.split('/')[1],
      id: itemId.split('-')[0] * 1,
    },
  });
  console.log(match);
  console.log(match.path.split('/')[1], itemId.split('-')[0] * 1);
  if (loading) return <div>Đang tải trang chi tiết</div>;
  if (error) return <div>Trang chi tiết bị lỗi</div>;

  return (
    <DetailPageContainer>
      <div>Hien thi san pham {itemId}</div>
      {console.log(data.item)}
      <Image src={data.item.large_img}></Image>
    </DetailPageContainer>
  );
};

export default DetailPage;
