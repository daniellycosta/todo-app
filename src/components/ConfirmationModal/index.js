import { Modal } from "src/components/Modal";

export const ConfirmationModal = ({
  entityName,
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      onSubmit={onSubmit}
      submitLabel={`Yes, delete ${entityName}`}
    >
      <h1>{`Delete ${entityName}`} </h1>
      <h3>Are you sure? This action can not be undone</h3>
    </Modal>
  );
};
