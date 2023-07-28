import { useState } from "react";
import { Layout } from "antd";
import HeaderContent from "./components/layout/HeaderContent";
import ProjectList from "./components/layout/ProjectList";
import styled from "@emotion/styled";
const { Header, Content } = Layout;

function App({ className }) {
  const [showAddProject, setShowAddProject] = useState(false);
  return (
    <Layout className={className}>
      <Header>
        <HeaderContent handleAddProjectClick={() => setShowAddProject(true)} />
      </Header>
      <Content>
        <ProjectList
          showAddProject={showAddProject}
          setShowAddProject={setShowAddProject}
        />
      </Content>
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
