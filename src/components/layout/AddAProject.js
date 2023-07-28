import ProjectListItem from "../UI/ProjectListItem";
import InputField from "../UI/InputField";

/**
 * @param {function} handleCreateProject
 */
const AddAProject = ({ handleCreateProject }) => (
  <ProjectListItem>
    <InputField onSubmit={handleCreateProject} />
  </ProjectListItem>
);

export default AddAProject;
