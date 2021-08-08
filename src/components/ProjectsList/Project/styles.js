import styled, { keyframes } from "styled-components";

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
  orange: "#F2994A",
  purple: "#9B51E0",
  blue: "#2D9CDB",
};

export const Container = styled.div`
  width: 15.62rem;
  height: 9.37rem;

  border-radius: 0.625rem;

  padding: 1rem 1rem;
  margin: 0.4rem 0.4rem;

  background: #ffff;

  &:hover {
    cursor: pointer;
  }

  img#icon {
    background-color: ${(props) => colors[props.color]};
    border-radius: 0.3125rem;
    padding: 0.8rem;
    width: 3.75rem;
  }

  h3 {
    color: var(--text-title);
    padding: 1rem 0rem;
  }
`;

export const ProjectHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
