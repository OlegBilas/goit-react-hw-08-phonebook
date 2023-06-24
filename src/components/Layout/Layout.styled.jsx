import styled from 'styled-components';
import img from '../../images/book.png';

export const Section = styled.section`
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

export const Header = styled.header`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
