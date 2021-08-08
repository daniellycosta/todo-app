import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Modal } from "src/common/Modal";
import { FormErrors } from "src/common/FormErrors";
import { ColorContainer, ColorRadioButton } from "./styles";

import { api } from "src/api";

const availableColors = ["blue", "red", "orange", "green", "purple"];

export const ProjectModal = ({
  isOpen,
  onRequestClose,
  isEdit = false,
  projectData = { id: "", name: "", color: "blue" },
}) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!isEdit) return;
    const { name, color } = projectData;
    setName(name);
    setColor(color);
  }, [isOpen]);

  const handleChangeColor = (chosenColor) => (event) => {
    event.preventDefault();
    setColor(chosenColor);
  };

  const clearForm = () => {
    setName("");
    setColor("blue");
    setErrors([]);
  };

  const validateForm = () => {
    const errors = [];
    if (!name) errors.push("Name can not be empty");
    if (!color) errors.push("Color can not be empty");
    setErrors(errors);
    return !errors.length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) return;

    return isEdit ? editProject() : createProject();
  };

  const editProject = () => {
    const { id } = projectData;
    api
      .patch(`/projects/${id}`, { name, color })
      .then((response) => {
        const message = response?.data?.message;
        toast.success(message);

        onRequestClose();
        clearForm();
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      });
  };

  const createProject = () => {
    api
      .post("/projects", { name, color })
      .then((response) => {
        const message = response?.data?.message;
        toast.success(message);

        onRequestClose();
        clearForm();
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      });
  };

  const handleOnRequestClose = (event) => {
    clearForm();
    onRequestClose();
    event.preventDefault();
  };
  return (
    <Modal
      isEdit={isEdit}
      isOpen={isOpen}
      onRequestClose={handleOnRequestClose}
      onSubmit={handleSubmit}
      submitLabel={isEdit ? "Save" : "Create"}
    >
      <h1>{isEdit ? "Edit Project" : "New Project"} </h1>
      <input
        placeholder="Project name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <h3>Color</h3>
      <ColorContainer>
        {availableColors.map((colorName) => (
          <ColorRadioButton
            id={colorName}
            key={colorName}
            selected={color === colorName}
            onClick={handleChangeColor(colorName)}
          />
        ))}
      </ColorContainer>
      <FormErrors errors={errors} />
    </Modal>
  );
};
