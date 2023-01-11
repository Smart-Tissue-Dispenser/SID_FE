import styled from "styled-components";

export const Mobile = styled.div`
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

export const Browser = styled.div`
  @media all and (max-width: 420px) {
    display: none;
  }
`;