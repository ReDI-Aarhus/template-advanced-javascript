import styled from "styled-components";

const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 10px;
`;


export const StyledButton = ({children}) => <Button>{children}</Button>
