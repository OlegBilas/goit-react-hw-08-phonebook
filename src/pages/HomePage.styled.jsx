import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 46px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 56px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
