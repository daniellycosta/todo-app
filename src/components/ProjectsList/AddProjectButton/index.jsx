import { Container } from "./styles";

import addImg from "src/assets/add.svg";

export const AddProjectButton = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={addImg} alt="add todo list" />
    </Container>
  );
};
