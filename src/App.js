import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
import HeaderContent from "./components/layout/HeaderContent";
import ProjectList from "./components/layout/ProjectList";
import styled from "@emotion/styled";
import DeleteProjectModal from "./components/UI/DeleteProjectModal";
import {
  addProject,
  editProject,
  removeProject,
  fetchProjects,
} from "./store/actions";
const { Header, Content } = Layout;

function App({ className }) {
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

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
    <Layout className={className}>
      <Header>
        <HeaderContent handleAddProjectClick={() => setShowAddProject(true)} />
      </Header>
      <Content>
        <ProjectList
          showAddProject={showAddProject}
          handleCreateProject={handleCreateProject}
          handleRenameProject={handleRenameProject}
          setSelectedProject={setSelectedProject}
          setShowDeleteModal={() => setShowDeleteModal(true)}
        />
      </Content>
      <DeleteProjectModal
        open={showDeleteModal}
        onOk={handleDeleteProject}
        onCancel={closeDeleteModal}
      />
    </Layout>
  );
}

const styledApp = styled(App)`
  background: none;
  .ant-layout-header {
    padding-block: 12px;
    background: none;
    height: auto;
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  .ant-layout-content {
    display: flex;
    justify-content: center;
  }
`;

export default styledApp;
