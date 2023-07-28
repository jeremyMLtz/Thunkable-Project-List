const initialState = {
  projects: [],
};
// At the moment, all these cases do the same thing because the response from the API returns an up to date list of projects
// if it didn't we could handle each of these cases as need be
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    case "ADD_PROJECT_SUCCESS":
      return {
        ...state,
        projects: action.payload,
      };
    case "EDIT_PROJECT_SUCCESS":
      return {
        ...state,
        projects: action.payload,
      };
    case "DELETE_PROJECT_SUCCESS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
