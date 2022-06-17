const express = require("express");
const router = express.Router();

const Task = require("./model");
const { checkTask, checkProjectId} = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find();
    const tasksBoolean = tasks.map((task) => {
      return { ...task, task_completed: task.task_completed ? true : false };
    });
    res.status(200).json(tasksBoolean);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkTask, checkProjectId, async (req, res, next) => {
  try {
    const newTask = await Task.insert(req.body);
    res
      .status(201)
      .json({
        ...newTask,
        task_completed: newTask.task_completed ? true : false,
      });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
