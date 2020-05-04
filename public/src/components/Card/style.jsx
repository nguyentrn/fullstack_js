import styled from 'styled-components';

const width = 18;
const cardRatio = {
  width: `${width}rem`,
  height: `${width * 1.8}rem`,
};

const CardContainer = styled.div`
  margin: 2rem 1rem;
  padding: 0.2rem;
  width: ${cardRatio.width};
  height: ${cardRatio.height};
  display: flex;
  flex-direction: column;
  justify-contents: space-around;
  background: ${(props) => props.theme.white};
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 0.5rem 0.1rem
    ${(props) => `${props.theme.dark}33`};
  & > div {
    height: 50%;
  }

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.5rem 0.2rem
      ${(props) => `${props.theme.dark}66`};
  }

  transition: 0.2s ease-out;
`;
const Info = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  // justify-content: center;
`;
const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 0 0.6rem;
`;

export { CardContainer, Info, Name };
