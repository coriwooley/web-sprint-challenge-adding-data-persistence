const express = require("express");
const router = express.Router();

const Project = require("./model");
const { checkProject } = require("./middleware");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  const projectBoolean = projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
  res.status(200).json(projectBoolean);
});

router.post("/", checkProject, async (req, res) => {
  const newProject = await Project.insert(req.body);
  res
    .status(201)
    .json({
      ...newProject,
      project_completed: newProject.project_completed ? true : false,
    });
});

module.exports = router;
