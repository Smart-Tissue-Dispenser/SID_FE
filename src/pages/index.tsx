import styled from "styled-components";
import MobileMainPage from "../pageContainer/mainPage";
import * as S from "./style";
export default function Home() {
  return (
    <>
      <S.Browser>Hello</S.Browser>
      <S.Mobile>
        <MobileMainPage />
      </S.Mobile>
    </>
  );
}
