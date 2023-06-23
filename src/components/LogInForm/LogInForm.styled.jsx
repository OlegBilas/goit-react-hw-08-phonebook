import styled from 'styled-components';

export const Form = styled.form`
  max-width: 280px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: rgb(219, 225, 204, 0.5);
  @media screen and (min-width: var(--tablet)) {
    max-width: 460px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 12px;
  border-radius: 4px;
`;
