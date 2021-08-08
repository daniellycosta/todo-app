import styled from "styled-components";

export const DoublePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;

  img#bigImage {
    width: 30rem;
    height: auto;
  }

  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ImagesContainer = styled.div`
  background: #ffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img#logo {
    width: 15rem;
    height: auto;

    margin-top: 2rem;
  }

  a {
    font-size: 0.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
