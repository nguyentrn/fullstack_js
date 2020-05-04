import styled from 'styled-components';

const ListPageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PageIndexes = styled.div`
  display: flex;
  justify-content: center;
`;
const PageIndex = styled.div`
  margin: 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.isActived ? '700' : '400')};
`;
export { ListPageContainer, PageIndexes, PageIndex };
