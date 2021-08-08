import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { PageContent } from "../PageContent";
import { AddProjectButton } from "./AddProjectButton";
import { Project } from "./Project";

import { api } from "src/api";
import { ProjectModal } from "./ProjectModal";

export const ProjectsList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    api
      .get("/projects")
      .then((response) => {
        const { data } = response;
        setProjects(data);
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      });
  };

  const closeModalAndFetchProjects = () => {
    setOpenModal(false);
    fetchProjects();
  };

  useEffect(fetchProjects, []);

  return (
    <PageContent>
      <Fragment>
        <AddProjectButton onClick={() => setOpenModal(true)} />
        {projects.map(({ color, _id, name }) => (
          <Project
            key={_id}
            color={color}
            id={_id}
            title={name}
            fetchProjects={fetchProjects}
          />
        ))}
        <ProjectModal
          isOpen={openModal}
          onRequestClose={closeModalAndFetchProjects}
        />
      </Fragment>
    </PageContent>
  );
};
