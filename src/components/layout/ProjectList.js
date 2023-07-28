import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import AddAProject from "./AddAProject";
import Project from "./Project";

/**
 * @param {boolean} showAddProject
 * @param {function} handleCreateProject
 * @param {function} handleRenameProject
 * @param {function} setSelectedProject
 * @param {function} setShowDeleteModal
 */
const ProjectList = ({
  className,
  showAddProject,
  handleRenameProject,
  handleCreateProject,
  setSelectedProject,
  setShowDeleteModal,
}) => {
  const projects = useSelector((state) => state.projects);
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
