const apiUrl = "http://localhost:8080/api/projects";
export const getProjects = () => {
  return fetch(apiUrl).then((data) => {
    return data.json();
  });
};

export const createProject = (name) => {
  const payload = {
    name,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch(apiUrl, requestOptions).then((data) => {
    return data.json();
  });
};

export const renameProject = (projectId, name) => {
  const payload = {
    name,
  };
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch(`${apiUrl}/${projectId}`, requestOptions).then((data) => {
    return data.json();
  });
};

export const deleteProject = (projectId) => {
  const requestOptions = {
    method: "DELETE",
  };
  return fetch(`${apiUrl}/${projectId}`, requestOptions).then((data) => {
    return data.json();
  });
};
