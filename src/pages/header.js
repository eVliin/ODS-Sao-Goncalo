import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Sg from "./sg";
import * as S from "../Style/styleHeader";

export default function Header() {
  return (
    <BrowserRouter>
      <S.Nav>
        <S.Ul>
          <li>
            <S.Links to="/">Home</S.Links>
          </li>
          <li>
            <S.Links to="/sg">São Gonçalo</S.Links>
          </li>
        </S.Ul>
      </S.Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sg" element={<Sg />} />
      </Routes>
    </BrowserRouter>
  );
}
