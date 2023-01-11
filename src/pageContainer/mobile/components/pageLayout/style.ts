import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CateLayout = styled.div`
  width: 90%;
  margin-top: 10rem;
`;
interface ColorProps {
  color: string;
}
export const CateHeader = styled.div<ColorProps>`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${(props) => props.color};
    font-size: 3rem;
    font-weight: bold;
  }
  div {
    background-color: ${(props) => props.color};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    .icon {
      width: 60%;
      height: 60%;
      color: white;
    }
  }
`;

export const CateList = styled.div`
  margin-top: 3rem;
  width: 100%;
`;
