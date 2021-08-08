import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "src/hooks/useAuth";

import { Container } from "./styles";

import { api } from "src/api";

import { PublicPages } from "../PublicPages";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const { saveAndUpdateUserAuth } = useAuth();

  const login = async (event) => {
    event.preventDefault();

    api
      .post("/login", { email, password })
      .then((response) => {
        saveAndUpdateUserAuth(response.data);
        history.push("/projects");
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      });
  };

  return (
    <PublicPages>
      <Container onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          <button type="submit">Login</button>
          <button type="text" onClick={() => history.push("/signup")}>
            Signup
          </button>
        </div>
      </Container>
    </PublicPages>
  );
};
