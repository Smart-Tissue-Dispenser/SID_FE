import styled from "styled-components";
export const StatusLayout = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
`;
interface Text {
  textColor: string;
}
export const Location = styled.div<Text>`
  width: 100%;
  font-size: 2.5rem;
  margin-left: 2rem;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;
interface ColorProps {
  color: string;
}
export const ColorDiv = styled.div<ColorProps>`
  width: 5rem;
  height: 100%;
  background-color: ${(props) => props.color};
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
