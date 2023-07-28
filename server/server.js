// Just a really simple server with the typical CRUD endpoints for managing projects
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Generic GUID Generator to create unique IDs for a project
function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// pretend projects is stored in a DB
let projects = [];

// Fetch all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Create a new project
app.post("/api/projects", (req, res) => {
  const { name } = req.body;
  const timeStamp = new Date();
  const formattedDate = timeStamp.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  if (!name) {
    return res
      .status(400)
      .json({ error: "Please include a name for your project" });
  }

  const payload = {
    name,
    createdDate: formattedDate,
    id: generateGUID(),
  };
  // This is where I would save the new record to the DB, but for this example we'll just push to the array
  projects.push(payload);
  res.status(200).json(projects);
});

// Edit a project
app.put("/api/projects/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  const { name } = req.body;
  if (!projectId) {
    return res
      .status(400)
      .json({ error: "Please include the projectId parameter" });
  }
  if (!name) {
    return res
      .status(400)
      .json({ error: "Please include a name for your project" });
  }
  /* Here I would probably query the DB to get the project that matches the projectId and throw an error if that project didn't exist
  but instead, we'll just run a map and update the matching project */
  projects.forEach((project) => {
    if (project.id === projectId) {
      return (project.name = name);
    }
  });

  res.status(200).json(projects);
});

// Delete a project
app.delete("/api/projects/:projectId", (req, res) => {
  const projectId = req.params.projectId;
  if (!projectId) {
    return res
      .status(400)
      .json({ error: "Please include the projectId parameter" });
  }
  /* Here I would probably query the DB to get the project that matches the projectId and throw an error if that project didn't exist
  then call a helper that deletes the project from the DB but instead, we'll just filter the projects array */
  projects = projects.filter((project) => projectId !== project.id);
  res.status(200).json(projects);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
