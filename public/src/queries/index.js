import { gql } from '@apollo/client';

const GET_ITEMS = gql`
  query items($type: String!, $page: Int!) {
    items(type: $type, page: $page) {
      id
      name
      url
      thumbnail_img
    }
  }
`;

const GET_ITEM = gql`
  query item($type: String!, $id: Int!) {
    item(type: $type, id: $id) {
      name
      url
      large_img
    }
  }
`;

export { GET_ITEMS, GET_ITEM };
