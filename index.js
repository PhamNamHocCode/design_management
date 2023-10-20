const express = require("express");
const mongoose = require("mongoose");

const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const database = require("./config/database");

const app = express();
const port = 3000;

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
