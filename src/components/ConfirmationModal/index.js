import { Modal } from "src/components/Modal";

export const ConfirmationModal = ({ isOpen, onRequestClose, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
      submitLabel="Yes, delete project"
    >
      <h1>Delete Project </h1>
      <h3>Are you sure? This action can not be undone</h3>
    </Modal>
  );
};
