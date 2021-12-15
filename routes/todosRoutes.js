const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosControllers.js");

//Fetch All Data
router.get("/todos", todosController.getAllTodos);

//Fetch One Data
router.get("/todos/:id", todosController.getTodo);

//Create Data
router.post("/todos", todosController.createTodo);

//Update Data
router.put("/todos/:id", todosController.updateTodo);

//Delete Data
router.delete("/todos/:id", todosController.deleteTodo);



module.exports = router;
