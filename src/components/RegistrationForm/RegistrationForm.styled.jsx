import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: rgb(219, 225, 204, 0.5);
  @media screen and (min-width: 768px) {
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
  width: 100%;
  margin-bottom: 12px;
  border-radius: 4px;
`;
