import { Fragment, useState } from "react";
import { Container, OptionsContainer, ProjectHeader } from "./styles";
import { toast } from "react-toastify";

import { ProjectModal } from "../ProjectModal";
import { ConfirmationModal } from "src/components/ConfirmationModal";

import { api } from "src/api";
import { useHistory } from "react-router";

import inventoryImg from "src/assets/inventory.svg";
import moreVertImg from "src/assets/moreVert.svg";
import editImg from "src/assets/edit.svg";
import deleteImg from "src/assets/delete.svg";

export const Project = ({ color, title, id, fetchProjects }) => {
  const [openEditionModal, setOpenEditionModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const history = useHistory();

  const closeModalAndFetchProjects = () => {
    setOpenEditionModal(false);
    fetchProjects();
  };

  const confirmDeleteAndFetchProjects = () => {
    api
      .delete(`/projects/${id}`)
      .then((response) => {
        const message = response?.data?.message;
        toast.success(message);
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      })
      .finally(() => {
        setOpenDeleteModal(false);
        fetchProjects();
      });
  };

  const handleClickProject = (event) => {
    event.stopPropagation();
    history.push(`/projects/${id}`);
  };

  return (
    <Fragment>
      <Container color={color} onClick={handleClickProject}>
        <ProjectHeader>
          <img src={inventoryImg} alt="project icon" />
          <OptionsContainer
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            {showMenu ? (
              <Fragment>
                <img
                  src={editImg}
                  alt="Edit"
                  onClick={() => setOpenEditionModal(true)}
                />
                <img
                  src={deleteImg}
                  alt="Delete"
                  onClick={() => setOpenDeleteModal(true)}
                />
              </Fragment>
            ) : (
              <img src={moreVertImg} alt="options" />
            )}
          </OptionsContainer>
        </ProjectHeader>

        <h3>{title}</h3>
      </Container>
      <ProjectModal
        isEdit
        projectData={{ name: title, color, id }}
        isOpen={openEditionModal}
        onRequestClose={closeModalAndFetchProjects}
      />
      <ConfirmationModal
        name={title}
        isOpen={openDeleteModal}
        onSubmit={confirmDeleteAndFetchProjects}
        onRequestClose={() => setOpenDeleteModal(false)}
      />
    </Fragment>
  );
};
