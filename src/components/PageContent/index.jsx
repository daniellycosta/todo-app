import { Container, Content } from "./styles";
import { ReactNode } from "react";

interface PageContentProps {
  children: ReactNode;
}

export const PageContent = (props: PageContentProps) => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};
