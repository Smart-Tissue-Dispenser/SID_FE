import styled from "styled-components";
export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Toilets = styled.div`
  margin-top: 3rem;
  width: 85%;
`;
export const Toilet = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 9rem;
`;
export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`;
interface Bgcolor {
  bg: string;
}
export const Info = styled.div<Bgcolor>`
  border-radius: 1rem;
  margin-top: 1rem;
  font-weight: bold;
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
export const ModalLayout = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 25rem;
  height: 20rem;
  box-shadow: 3px 3px 1000px 1000px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalContent = styled.div`
  width: 90%;
`;
export const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  span {
    font-size: 2rem;
    font-weight: bold;
  }
  .icon {
    height: 60%;
    width: auto;
  }
`;
export const Text = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
