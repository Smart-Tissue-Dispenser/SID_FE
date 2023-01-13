import styled from "styled-components";

export const Content = styled.div`
  width: 90%;
  .stat {
    font-weight: bold;
    font-size: 2rem;
  }
`;
export const Info = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Total = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 10rem;
  border-radius: 1rem;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const Text = styled.div`
  font-size: 2rem;
`;
export const Graph = styled.div`
  width: 90%;
  height: 25rem;
`;
