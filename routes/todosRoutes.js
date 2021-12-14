const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosControllers.js");

//Tüm Verileri Getirme
router.get("/todos", todosController.getAllTodos);

//Bir Tane Veri Getirme
router.get("/todos/:id", todosController.getTodo);

//Veri Oluşturma
router.post("/todos", todosController.createTodo);

//Veri Güncelleme
router.put("/todos/:id", todosController.updateTodo);

//Veri Silme
router.delete("/todos/:id", todosController.deleteTodo);



module.exports = router;
