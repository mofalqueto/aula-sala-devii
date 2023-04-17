import TaskRepository from "../models/tasksModels.js";


function findAll(req, res) {
    TaskRepository.findAll().then((result) => res.json(result));
}

function findTask(req, res) {
    TaskRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addTask(req, res) {
    TaskRepository.create({
    title: req.body.title,
  }).then((result) => res.json(result));
}

async function updateTask(req, res) {
  await TaskRepository.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  TaskRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteTask(req, res) {
  await TaskRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  TaskRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addTask, findTask, updateTask, deleteTask };
