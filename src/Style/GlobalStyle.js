import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Roboto';
}
body{
  transition: ease-in 0.5s;
  background:${(props) => props.theme.colors.background};
  color:${(props) => props.theme.colors.text};
}
`;
