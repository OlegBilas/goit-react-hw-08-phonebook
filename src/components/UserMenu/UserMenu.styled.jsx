import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flexbox;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-left: 12px;
  }
`;

export const Username = styled.p`
  font-weight: 400;
`;
