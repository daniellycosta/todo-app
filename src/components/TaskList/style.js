import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  width: 100%;
`;

export const TaskAddButton = styled.div`
  height: 4rem;
  width: 100%;
  border-radius: 0.3125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0.0625rem dotted var(--text-body);

  background: none;
  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: opacity(0.7);
  }

  img {
    width: 4rem;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 2rem;
`;
