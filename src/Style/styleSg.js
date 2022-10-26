import Styled from "styled-components";

export const Container = Styled.section`
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  padding: 1.5vw;
`;

export const Title = Styled.section`
  width:100%;
  height:20vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Sg = Styled.section`
 justify-content:center;
  align-items:center;
  display:flex;
  flex-wrap:wrap;
  gap:2em;
`;

export const Img = Styled.img`
  width:40vw;

`;

export const P = Styled.p`
  min-width: 40vw;
`;

export const Div = Styled.div`
  max-width: 43vw;
  min-height:50vh;
  justify-content:space-around;
  align-items:center;
  display:flex;
  flex-direction:column;
  border:solid #009EDB 2px;
  border-radius:1em;
  padding: 1vw;
  box-shadow: 2px 2px 7px 3px #000;
  text-align: center;
`;
