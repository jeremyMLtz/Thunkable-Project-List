import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import AddAProject from "./AddAProject";
import Project from "./Project";
import DeleteProjectModal from "../UI/DeleteProjectModal";
import {
  addProject,
  editProject,
  removeProject,
  fetchProjects,
} from "../../store/actions";

/**
 * @param {boolean} showAddProject
 * @param {function} setShowAddProject
 */
const ProjectList = ({ className, showAddProject, setShowAddProject }) => {
  // All main handlers for updating projects is here that way you can use ProjectList anywhere in an app
  // as long where ProjectList is implemented contains a button to handle showAddProject/setShowAddProject
  // since in this design, that button exists outside of ProjectList and in the HeaderContent component
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedProject(null);
  };

  const handleCreateProject = (name) => {
    if (name.trim().length === 0) {
      return;
    }
    dispatch(addProject(name));
    setShowAddProject(false);
  };

  const handleRenameProject = (newName) => {
    if (newName.trim().length === 0) {
      return;
    }
    dispatch(editProject(selectedProject, newName));
    setSelectedProject(null);
  };

  const handleDeleteProject = () => {
    dispatch(removeProject(selectedProject));
    closeDeleteModal();
  };
  return (
    <ul className={className}>
      {showAddProject && (
        <AddAProject handleCreateProject={handleCreateProject} />
      )}
      {projects?.length >= 1 &&
        projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            createdDate={project.createdDate}
            handleRenameProject={handleRenameProject}
            handleDeleteProjectClick={() => setShowDeleteModal(true)}
            setSelectedProject={setSelectedProject}
          />
        ))}
      <DeleteProjectModal
        open={showDeleteModal}
        onOk={handleDeleteProject}
        onCancel={closeDeleteModal}
      />
    </ul>
  );
};

const styledProjectList = styled(ProjectList)`
  padding: 0;
  margin-block-start: 70px;

  @media screen and (max-width: 450px) {
    max-height: 70dvh;
    overflow-x: scroll;
    margin-block-start: 0;
  }
`;

export default styledProjectList;
