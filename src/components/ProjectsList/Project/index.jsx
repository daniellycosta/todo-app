import { Fragment, useState } from "react";
import { Container, ProjectHeader } from "./styles";
import { toast } from "react-toastify";

import { ProjectModal } from "../ProjectModal";
import { HoverOptions } from "src/common/HoverOptions";
import { ConfirmationModal } from "src/common/ConfirmationModal";

import { api } from "src/api";
import { useHistory } from "react-router";

import inventoryImg from "src/assets/inventory.svg";

export const Project = ({ color, title, id, fetchProjects }) => {
  const [openEditionModal, setOpenEditionModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const history = useHistory();

  const closeModalAndFetchProjects = () => {
    setOpenEditionModal(false);
    fetchProjects();
  };

  const confirmDeleteAndFetchProjects = (event) => {
    event.preventDefault();
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
          <img src={inventoryImg} alt="project icon" id="icon" />
          <HoverOptions
            onClickDelete={(event) => {
              event.stopPropagation();
              setOpenDeleteModal(true);
            }}
            onClickEdit={(event) => {
              event.stopPropagation();
              setOpenEditionModal(true);
            }}
          />
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
        entityName="project"
        isOpen={openDeleteModal}
        onSubmit={confirmDeleteAndFetchProjects}
        onRequestClose={() => setOpenDeleteModal(false)}
      />
    </Fragment>
  );
};
