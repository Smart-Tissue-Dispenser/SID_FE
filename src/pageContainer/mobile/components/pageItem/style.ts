interface ColorProps {
  color: string;
}
import styled from "styled-components";
export const CateItem = styled.div<ColorProps>`
  color: black;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  height: 9rem;
  display: flex;
  align-items: center;
  .icon {
    margin-left: 2rem;
    width: 5rem;
    height: 100%;
  }
  span {
    font-size: 2.5rem;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  div {
    background-color: ${(props) => props.color};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 100%;
    width: 5rem;
  }
`;
