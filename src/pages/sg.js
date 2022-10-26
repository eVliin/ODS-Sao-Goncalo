import React from "react";
import * as S from "../Style/styleSg";
import objtvs from "./objtvs.json";

export default function Sg() {
  return (
    <S.Container>
      <S.Title>
        <h2>Fatos e Sugestões sobre as ODS na cidade.</h2>
      </S.Title>
      <S.Sg>
        {objtvs.map((objtvs, index) => (
          <S.Div>
            <S.Img src={objtvs.img} alt="" />
            <S.P>{objtvs.p}</S.P>
          </S.Div>
        ))}
      </S.Sg>
    </S.Container>
  );
}
