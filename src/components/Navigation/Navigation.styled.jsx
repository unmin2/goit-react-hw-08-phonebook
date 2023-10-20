import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  gap: 10px;
`;
export const Button = styled.button`
 width: 120px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #eba4c0;
  }
`