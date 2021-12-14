const pool = require("../db.js");

//Tüm Verileri Getirme
const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todo ORDER BY todo_id DESC"
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

//Bir Tane Veri Getirme
const getTodo = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

//Veri Oluşturma
const createTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

//Veri Güncelleme
const updateTodo = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description =$1 WHERE todo_id=$2",
      [description, id]
    );
    res.json({ message: "Success", Data: description });
  } catch (err) {
    console.error(err.message);
  }
};

//Veri Silme
const deleteTodo = async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  try {
    const todo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [id]);
    res.json({ message: "Success", Data: id });
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
