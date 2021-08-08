import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 15.5575rem;
  height: 9.3075rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.625rem;
  border: 0.0625rem dotted var(--text-body);

  background: none;
  transition: filter 0.2s;
  margin: 0.4rem 0.4rem;

  &:hover {
    cursor: pointer;
    filter: opacity(0.7);
  }

  img {
    width: 4rem;
  }
`;

export const TodoHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

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

  &:hover {
    background-color: var(--text-body);
    justify-content: space-between;

    animation: ${fadeIn} 0.5s linear;
  }

  img {
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
