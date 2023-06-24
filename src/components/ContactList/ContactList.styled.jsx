import styled from 'styled-components';

export const List = styled.ul`
  max-width: calc(100% - 20px);
  padding: 0;
  @media screen and (min-width: var(--desktop)) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  margin-bottom: 4px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 50%;
    margin-right: 10px;
  }

  & > button {
    display: none;
    width: 80px;
  }

  &:hover > button {
    display: block;
  }
`;

export const Name = styled.span`
  width: 240px;
`;

export const Number = styled.span`
  width: 120px;
`;
