import styled from 'styled-components';

const DetailPageContainer = styled.div`
  margin: 2rem;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-contents: space-around;
  background: #eeeeee;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-contents: space-around;
`;

const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-around;
`;

const ImageContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: auto;
  }
`;

export {
  DetailPageContainer,
  InfoContainer,
  GeneralContainer,
  ImageContainer,
};
