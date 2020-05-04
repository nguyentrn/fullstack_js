import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { ListPageContainer, PageIndexes, PageIndex } from './style';
import DetailPage from '../DetailPage';
import ComparePage from '../ComparePage';
import CardList from '../../components/CardList';
import SelectBar from '../../components/SelectBar';
import { GET_ITEMS } from '../../queries';
import { convertUrlPath, getPageIndexes } from '../../ultils/';

const ListPage = (props) => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(1);
  const match = useRouteMatch();
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { type: convertUrlPath(props.type), page, sortBy },
  });
  // const [pages, setPages] = useState(1);

  if (loading) return <div>Đang tải trang danh sách</div>;
  if (error)
    return <div>Trang danh sách bị lỗi{console.log(error)}</div>;

  const handleSetPage = (page) => {
    setPage(page);
  };

  const handleSetSortBy = (sb) => {
    setSortBy(sb);
    setPage(1);
  };
  const items = data.items;
  const summary = data.summary;
  const categories = data.itemPropCategories;
  const pages = getPageIndexes(summary.count, page);

  return (
    <ListPageContainer>
      <Switch>
        <Route exact path={`${match.path}`}>
          <h4>
            Hiển thị danh sách của{' '}
            <strong>
              {summary.count} {props.type}
            </strong>{' '}
            / Trang {page}
          </h4>
          <SelectBar
            title={'Sắp xếp theo'}
            values={categories}
            handleSetSortBy={handleSetSortBy}
          ></SelectBar>
          <CardList items={items} />
          <PageIndexes>
            {pages.map((p, id) => (
              <PageIndex
                isActived={p === page}
                key={id}
                onClick={() => handleSetPage(p)}
              >
                {p}
              </PageIndex>
            ))}
          </PageIndexes>
        </Route>
        <Route path={`${match.path}/so-sanh-:first-va-:second`}>
          <ComparePage />
        </Route>
        <Route path={`${match.path}/:itemId`}>
          <DetailPage />
        </Route>
      </Switch>
    </ListPageContainer>
  );
};

export default ListPage;
