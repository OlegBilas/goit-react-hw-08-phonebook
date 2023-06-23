import styled from 'styled-components';
import img from '../images/book.png';

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

export const Wrapper = styled.div`
  max-width: 280px;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: rgb(169, 194, 245, 0.5);
  @media screen and (min-width: var(--tablet)) {
    max-width: 460px;
  }
`;

export const TitlePhonebook = styled.h1`
  max-width: 280px;
  margin-bottom: 20px;
  text-align: center;
  color: aliceblue;
  @media screen and (min-width: var(--tablet)) {
    max-width: 460px;
  }
`;
export const TitleContacts = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: aliceblue;
`;
