import { Container, Content } from "./styles";

import { useHistory } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

import logoImg from "../../assets/todoLogo.svg";

export const Header = () => {
  const { deleteUserAuth } = useAuth();
  const history = useHistory();

  const logout = () => {
    deleteUserAuth();
    history.push("/login");
  };

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="todoApp" />
        <button type="button" onClick={logout}>
          Logout
        </button>
      </Content>
    </Container>
  );
};
