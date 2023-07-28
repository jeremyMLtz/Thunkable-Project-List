import {
  createProject,
  renameProject,
  deleteProject,
  getProjects,
} from "../utility/apiHelpers";

const setProjects = (payload) => ({
  type: "SET_PROJECTS",
  payload,
});

const addProjectSuccess = (payload) => ({
  type: "ADD_PROJECT_SUCCESS",
  payload,
});

const editProjectSuccess = (payload) => ({
  type: "EDIT_PROJECT_SUCCESS",
  payload,
});

const deleteProjectSuccess = (payload) => ({
  type: "DELETE_PROJECT_SUCCESS",
  payload,
});

const fetchProjects = () => {
  return (dispatch) => {
    getProjects()
      .then((data) => {
        dispatch(setProjects(data));
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };
};

const addProject = (projectName) => {
  return (dispatch) => {
    createProject(projectName)
      .then((data) => {
        dispatch(addProjectSuccess(data));
      })
      .catch((error) => {
        // Handle error (dispatch an error action, show an error message, etc.)
        console.error("Error:", error);
      });
  };
};

const editProject = (projectId, newName) => {
  return (dispatch) => {
    renameProject(projectId, newName)
      .then((data) => {
        dispatch(editProjectSuccess(data));
      })
      .catch((error) => {
        // Handle error (dispatch an error action, show an error message, etc.)
        console.error("Error:", error);
      });
  };
};

const removeProject = (projectId) => {
  return (dispatch) => {
    deleteProject(projectId)
      .then((data) => {
        dispatch(deleteProjectSuccess(data));
      })
      .catch((error) => {
        // Handle error (dispatch an error action, show an error message, etc.)
        console.error("Error:", error);
      });
  };
};

export { addProject, editProject, removeProject, fetchProjects };
