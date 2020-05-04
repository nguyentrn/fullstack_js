import styled from 'styled-components';

const ImageContainer = styled.div`
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
`;
// height: 100%;
// overflow: hidden;
// display: flex;
// align-items: center;
// justify-content: center;

// img {
//   width: 100%;
// }

// width: 100%;

export { ImageContainer };
