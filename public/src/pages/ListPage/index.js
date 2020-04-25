import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ListPageContainer } from './style';
import CardList from '../../components/CardList';
import { GET_ITEMS } from '../../queries';
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import DetailPage from '../DetailPage';

const ListPage = (props) => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { type: props.type, page: page },
  });

  const handleClick = (page) => {
    setPage(page);
  };

  if (loading) return <div>Đang tải trang danh sách</div>;
  if (error) return <div>Trang danh sách bị lỗi</div>;
  return (
    <ListPageContainer>
      <Switch>
        <Route exact path={`/${location.pathname.split('/')[1]}`}>
          <div>
            Danh sach {props.type}/Trang {page}
          </div>
          <CardList items={data.items} />
          <div>
            {[1, 2, 3, 4, 5].map((p) => (
              <h4 onClick={() => handleClick(p)}>{p}</h4>
            ))}
          </div>
        </Route>
        <Route path={`${match.path}/:itemId`}>
          <DetailPage />
        </Route>
      </Switch>
    </ListPageContainer>
  );
};

export default ListPage;
