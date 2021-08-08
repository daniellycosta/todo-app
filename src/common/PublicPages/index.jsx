import { DoublePageContainer, Content, ImagesContainer } from "./styles";
import checklistImg from "src/assets/checklist.png";
import todoLogoDarkImg from "src/assets/todoLogoDark.svg";

export const PublicPages = ({ children }) => {
  return (
    <DoublePageContainer>
      <ImagesContainer>
        <img src={todoLogoDarkImg} id="logo" alt="checklist" />
        <a href="https://br.freepik.com/vetores/pessoas">
          <img src={checklistImg} id="bigImage" alt="woman with a todo list" />
        </a>
      </ImagesContainer>

      <Content>{children}</Content>
    </DoublePageContainer>
  );
};
