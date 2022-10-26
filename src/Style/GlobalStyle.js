import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Roboto';
  transition: ease-in 0.5s;

}
body{
  background:${(props) => props.theme.colors.background};
  color:${(props) => props.theme.colors.text};
}
`;
