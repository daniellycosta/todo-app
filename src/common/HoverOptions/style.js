import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from{
  opacity: 0;
}to{
  opacity: 1;
}
`;

export const OptionsContainer = styled.div`
  border-radius: 3.125rem;
  width: 7.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0.2rem 0.3rem;

  @media only screen and (max-width: 720px) {
    background-color: var(--text-body);
    justify-content: space-between;
  }

  &:hover {
    background-color: var(--text-body);
    justify-content: space-between;

    animation: ${fadeIn} 0.5s linear;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border-radius: 3.125rem;

    width: 2rem;
    height: 2rem;
    padding: 0.3125rem;

    transition: backdrop-filter 0.2s;

    &:hover {
      backdrop-filter: brightness(0.9);
    }
  }
`;
