import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useRouteMatch } from 'react-router-dom';
import { GET_ITEM } from '../../queries';

const ComparePage = () => {
  const { second } = useParams();
  const match = useRouteMatch();

  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: {
      type: match.path.split('/')[1],
      id: second.split('-')[0] * 1,
    },
  });
  if (loading) return <div>Đang tải trang so sánh</div>;
  if (error) return <div>Trang so sánh bị lỗi</div>;
  return <div>{data}</div>;
};

export default ComparePage;
