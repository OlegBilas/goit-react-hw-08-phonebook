import styled from 'styled-components';
import img from '../../images/book.png';

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      to left,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${img});
`;
