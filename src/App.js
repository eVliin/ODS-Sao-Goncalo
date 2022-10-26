import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/themes";
import { GlobalStyle } from "./Style/GlobalStyle";
import Header from "./pages/header";
import Logo from "./assets/logo.png";
import { CgDarkMode } from "react-icons/cg";
import * as S from "./Style/styles";
import useLocalStorage from "./assets/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <S.Container>
        <GlobalStyle />
        <S.Logo src={Logo} alt="" />
        <S.H1>
          Objetivos de Desenvolvimento
          <br /> Sustentável (ODS)
        </S.H1>
        <S.BoxTheme>
          <S.Button onClick={() => themeToggler()}>
            <CgDarkMode />
          </S.Button>
        </S.BoxTheme>
      </S.Container>
      <Header />
    </ThemeProvider>
  );
}
