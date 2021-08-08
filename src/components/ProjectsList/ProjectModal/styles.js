import styled from "styled-components";
import { transparentize } from "polished";

export const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0;

  gap: 1rem;
`;

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
  orange: "#F2994A",
  purple: "#9B51E0",
  blue: "#2D9CDB",
};

export const ColorRadioButton = styled.button`
  background: ${(props) =>
    props.selected
      ? transparentize(0.7, colors[props.id])
      : colors[props.id]}; ;
`;
