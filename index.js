const express = require("express");
const todosRoutes = require("./routes/todosRoutes.js");
const app = express();
app.use(express.json());

//ROUTES
app.use(todosRoutes);

//404
app.get("*", async (req, res) => {
  res.json({ message: "404" });
});

app.listen(3000, () => {
  console.log("Server Port: 3000");
});
