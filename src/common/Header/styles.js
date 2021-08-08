import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    background: var(--blue-light);
  }
`;