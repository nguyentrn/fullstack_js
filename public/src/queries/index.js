import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query items($type: String!, $page: Int!, $sortBy: Int) {
    summary(type: $type)
    itemPropCategories(type: $type)
    items(type: $type, page: $page, sortBy: $sortBy) {
      id
      name
      url
      thumbnail_img
      rating
    }
  }
`;

const GET_ITEM = gql`
  query item($type: String!, $id: Int!) {
    item(type: $type, id: $id) {
      name
      url
      large_img
      rating
      properties {
        name
        display_name
        kind
        value
        category
        unit
      }
    }
  }
`;

export { GET_ITEMS, GET_ITEM };
