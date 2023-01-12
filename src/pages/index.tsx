import { RecoilRoot, atom } from "recoil";
import styled from "styled-components";
import MobileMainPage from "../pageContainer/mainPage";
export const ModalState = atom({
  key: "modal",
  default: "close",
});
export default function Home() {
  return (
    <RecoilRoot>
      <MobileMainPage />
    </RecoilRoot>
  );
}
