import React from "react";
import Image from "../assets/home/imgHome.jpg";
import * as S from "../Style/styleHome";

export default function () {
  return (
    <S.Container>
      <S.Box>
        <S.Title>
          O que são os Objetivos de Desenvolvimento Sustentável?
        </S.Title>
        <>
          <S.P>
            Em setembro de 2015, a ONU realizou uma Cúpula sobre Desenvolvimento
            Sustentável para criar uma agenda global chamada Objetivos de
            Desenvolvimento Sustentável (ODS). Eles incluíram 169 metas que
            precisam ser alcançadas até 2030. <br />
            Esta lista detalha várias questões relacionadas à segurança
            alimentar, educação, saúde, meio ambiente, energia, agricultura,
            mudanças climáticas, proteção dos oceanos e até dos ecossistemas
            terrestres, bem como a industrialização. Há muitos tópicos
            adicionais listados nesta agenda também.
          </S.P>
        </>
        <>
          <S.Image src={Image} alt="" />
        </>
      </S.Box>
    </S.Container>
  );
}
