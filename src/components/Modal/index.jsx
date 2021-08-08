import ModalContainer from "react-modal";
import { Container, ModalOptions } from "./styles";

ModalContainer.setAppElement("#root");

export const Modal = ({
  children,
  isOpen,
  onRequestClose,
  onSubmit,
  submitLabel = "Ok",
  isEdit = false,
}) => {
  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={onSubmit}>
        {children}
        <ModalOptions>
          <button type="submit">{submitLabel}</button>
          <button type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </ModalOptions>
      </Container>
    </ModalContainer>
  );
};
