import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
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
