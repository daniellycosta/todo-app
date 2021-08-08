import { ErrorsContainer } from "./style";

export const FormErrors = ({ errors }) => {
  return (
    <ErrorsContainer>
      {!!errors.length && errors.map((error) => <h5>{error}</h5>)}
    </ErrorsContainer>
  );
};
