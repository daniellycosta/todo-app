import { useState, useEffect, Fragment } from "react";
import { PageContent } from "../PageContent";

import { TaskAddButton, Container } from "./style";
import { TaskModal } from "./TaskModal";
import { Task } from "./Task";

import addImg from "src/assets/add.svg";

import { api } from "src/api";
import { toast } from "react-toastify";

export const TaskList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [, , projectId] = window.location.pathname.split("/");

  const fetchTasks = () => {
    api
      .get(`/projects/${projectId}/tasks`)
      .then((response) => {
        const { data } = response;
        setTasks(data);
      })
      .catch((error) => {
        const message = error?.response?.data?.message;
        toast.error(message);
      });
  };

  useEffect(fetchTasks, []);

  const closeModalAndFetchTasks = () => {
    setOpenModal(false);
    fetchTasks();
  };

  return (
    <PageContent>
      <Container>
        <TaskAddButton onClick={() => setOpenModal(true)}>
          <img src={addImg} alt="add task" />
        </TaskAddButton>
        {tasks.map(({ _id, name, finished, finishedAt }) => (
          <Task
            key={_id}
            id={_id}
            name={name}
            finished={finished}
            finishedAt={finishedAt}
            projectId={projectId}
            fetchTasks={fetchTasks}
          />
        ))}
      </Container>
      <TaskModal
        projectId={projectId}
        isOpen={openModal}
        onRequestClose={closeModalAndFetchTasks}
      />
    </PageContent>
  );
};
