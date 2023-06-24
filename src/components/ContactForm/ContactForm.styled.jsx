import styled from 'styled-components';

export const Form = styled.form`
  max-width: calc(100% - 40px);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: rgb(219, 225, 204, 0.5);
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  display: block;
  min-width: 200px;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    min-width: 400px;
  }
`;
