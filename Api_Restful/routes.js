import express from "express";

import tasks from "./src/controllers/tasks.js";

const routes = express.Router();

routes.get("/tasks", tasks.findAll);
routes.post("/tasks", tasks.addTask);
routes.get("/tasks/:id", tasks.findTask);
routes.put("/tasks/:id", tasks.updateTask);
routes.delete("/tasks/:id", tasks.deleteTask);

export { routes as default };